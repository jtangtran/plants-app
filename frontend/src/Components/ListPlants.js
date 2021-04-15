import React, {useEffect, useState} from 'react';

import EditPlant from './EditPlant';

//Component that lists all the plants and updates the list of plants based on search title (if the user searches for a plant)
const ListPlants = () => {
    const [plants, setPlants] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        getPlants();
    }, []);

    //gets all the plants
    const getPlants = async () => {
        try {
            const res = await fetch("/plants");
            const data = await res.json();
            setPlants(data);
        } catch (err) {
            console.error(err.message);
        }
    }

    //deletes a plant
    const deletePlant = async (id) => {
        try {
            const deletePlant = await fetch (`/plants/${id}`, {
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
            const res = await fetch(`/plants/title/${searchTitle}`);
            const data = await res.json();
            //compares the two arrays of objects and find the matching values
            setPlants(plants.filter(({ plant_id: id1 }) => data.some(({ plant_id: id2 }) => id2 === id1)));
        } catch (err) {
            console.error(err.message);
        }
    };

    //sets the search title based on user input
    const onChangeSearchTitle = e => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    //clears the search result
    const clearSearch = () => {
        try {
            setSearchTitle("");
            getPlants();
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div>
            <h5 className="text-center mb-3 mt-4">Search for your favourite plant title!</h5>
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
                    <th>Plant Title:</th>
                    <th>Plant Description:</th>
                    <th>Edit:</th>
                    <th>Delete:</th>
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
        </div>
    );
};

export default ListPlants;