const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//Routes

//creates a plant
app.post("/plants", async(req, res) => {
    try {
        const {title, description} = req.body; 
        const newPlant = await pool.query("insert into plant(title, description) values($1, $2) returning *", [title, description] )
        //returns simplified data
        res.json(newPlant.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
});

//gets all the plants
app.get("/plants", async(req, res) => {
    try {
        const allPlants = await pool.query("select * from plant");
        res.json(allPlants.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a plant by id
app.get("/plants/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const plant = await pool.query("select * from plant where plant_id = $1", [id]);
        res.json(plant.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get a plant by title
app.get("/plants/title/:title", async(req, res) => {
    try {
        const { title } = req.params;
        const plant = await pool.query("select * from plant where title like $1", [`${title}%`]);
        res.json(plant.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//update plant
app.put("/plants/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description, title} = req.body;
        const updatePlant = await pool.query(
            "Update plant set description = $1, title = $2 where plant_id = $3", 
            [description, title, id]
        );

        res.json("Plant has been successfully updated");
    } catch (err){
        console.error(err.message);
    }
});

//delete a plant 
app.delete("/plants/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deletePlant = await pool.query("Delete from plant where plant_id = $1", 
        [id]);
        res.json("Plant has been successfully deleted")
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("Server started on port 5000")
});