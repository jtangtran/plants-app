import React, {Fragment, useEffect, useState} from 'react';

const ListPlants = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        getPlants();
    }, []);

    //gets all the plants
    const getPlants = async () => {
        try {
            const res = await fetch("http://localhost:5000/plants");
            const data = await res.json();
            setPlants(data);
        } catch (err) {
            console.error(err.message);
        }
    }

    //deletes a plant
    const deletePlant = async (id) => {
        try {
            const deletePlant = await fetch (`http://localhost:5000/plants/${id}`, {
                method: "DELETE"
            });
            setPlants(plants.filter(plant => plant.plant_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
      {plants.map((plant) => (
          <tr key={plant.plant_id}>
              <td>{plant.title}</td>
              <td>{plant.description}</td>
              <td>Edit</td>
              <td><button className="btn btn-danger" onClick={() => deletePlant(plant.plant_id)}>Delete</button></td>
          </tr>

      ))}
    </tbody>
  </table>
        </Fragment>
    
    );
};

export default ListPlants;