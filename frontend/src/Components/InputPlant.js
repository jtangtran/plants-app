import React, {Fragment, useState} from 'react';

const InputPlant = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    
    const onSubmit = async(e) => {
        e.preventDefault();
        try {
            const body = {title, description};
            const res = await fetch("http://localhost:5000/plants", {
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });
            //once response has been set page will refresh
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <Fragment>
            <h1 className="text-center mt-5">Plants Galore!</h1>
            <h3 className="text-center"> Add your favourite plants!</h3>
            <form className="d-flex mt-4" onSubmit={onSubmit}>
                <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} placeholder="Plant Title" required/>
                <div className="ml-1 mr-1"></div>
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} placeholder="Plant Description" required/>
                <div className="ml-1 mr-1"></div>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
};

export default InputPlant;