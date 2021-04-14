import React, {Fragment, useEffect, useState} from 'react';

import EditPlant from './EditPlant';

const ListPlants = () => {
    const [plants, setPlants] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

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

    //search plant by title
    const findPlantByTitle = async () => {
        try {
            const res = await fetch(`http://localhost:5000/plants/title/${searchTitle}`);
            const data = await res.json();
            setPlants(plants.filter(plant => plant.plant_id === data.plant_id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const onChangeSearchTitle = e => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    //clears search result
    const clearSearch = () => {
        try {
            setSearchTitle("");
            getPlants();
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <Fragment>
            <h5 className="text-center mb-3 mt-3">Search for your favourite plant!</h5>
            <div className="input-group mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by title"
                    value={searchTitle}
                    onChange={onChangeSearchTitle}
                />
                <div className="ml-1 mr-1"></div>
                <div className="input-group-append">
                    <button 
                        className="btn btn-primary"
                        type="button"
                        onClick={findPlantByTitle}    
                    >
                    Search
                    </button>
                    <div className="ml-1 mr-1"></div>
                    <button type="button" className="btn btn-outline-primary" onClick={clearSearch}>Clear Search Results</button>

                </div>
            </div>
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
                    {plants.map((plant) => (
                        <tr key={plant.plant_id}>
                            <td>{plant.title}</td>
                            <td>{plant.description}</td>
                            <td><EditPlant plant={plant}/></td>
                            <td><button className="btn btn-danger" onClick={() => deletePlant(plant.plant_id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListPlants;