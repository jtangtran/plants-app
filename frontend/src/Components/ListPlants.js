import React, {Fragment, useEffect, useState} from 'react';

const ListPlants = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        getPlants();
    }, []);

    const getPlants = async () => {
        try {
            const res = await fetch("http://localhost:5000/plants");
            const data = await res.json();
            setPlants(data);
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
      {plants.map((plant, index) => (
          <tr key={index}>
              <td>{plant.title}</td>
              <td>{plant.description}</td>
              <td>Edit</td>
              <td>Delete</td>
          </tr>

      ))}
    </tbody>
  </table>
        </Fragment>
    
    );
};

export default ListPlants;