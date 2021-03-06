import React, {useState} from 'react';

//Component that edits the selected plant based on the ListPlants component
const EditPlant = ( {plant} ) => {
    const [description, setDescription] = useState(plant.description);
    const [title, setTitle] = useState(plant.title);

    //edits the plant's content
    const updateContent = async(e) => {
        e.preventDefault();
        try {
            const body = { title, description };
            const res = await fetch(`/plants/${plant.plant_id}`, {
                method: "PUT",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });
            //once response has been set page will refresh
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <div>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${plant.plant_id}`}>Edit</button>
            <div id={`id${plant.plant_id}`} className="modal fade" role="dialog" onClick={() => {setDescription(plant.description); setTitle(plant.title)}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Plant: {plant.title}</h4>
                            <button type="button" className="close" data-dismiss="modal" onClick={() => {setDescription(plant.description); setTitle(plant.title)}}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <p className="text-left">Title: </p>
                            <input type="text" className="form-control" value={title} placeholder="Title" onChange={e => setTitle(e.target.value)}/>
                            <br />
                            <p className="text-left">Description: </p>
                            <input type="text" className="form-control" value={description} placeholder="Description" onChange={e => setDescription(e.target.value)}/>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={e => updateContent(e)}>Update</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => {setDescription(plant.description); setTitle(plant.title)}}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPlant;