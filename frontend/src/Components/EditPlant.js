import React, {Fragment, useState} from 'react';

const EditPlant = ( {plant} ) => {
    const [description, setDescription] = useState(plant.description);
    const [title, setTitle] = useState(plant.title);

    //edit content
    const updateContent = async(e) => {
        e.preventDefault();
        try {
            const body = { title, description };
            const res = await fetch(`http://localhost:5000/plants/${plant.plant_id}`, {
                method: "PUT",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default EditPlant;