const pool = require("../../db");

//creates a plant
const create = async(req, res) => {
    try {
        const {title, description} = req.body; 
        const newPlant = await pool.query("insert into plant(title, description) values($1, $2) returning *", [title, description] )
        //returns simplified data
        res.json(newPlant.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
}

// gets all the plants
const getAllPlants = async (req, res) => {
    try {
        const allPlants = await pool.query("select * from plant order by title");
        res.json(allPlants.rows);
    } catch (err) {
        console.error(err.message);
    }
}

//get plant by id
const getPlantById = async (req, res) => {
    try {
        const { id } = req.params;
        const plant = await pool.query("select * from plant where plant_id = $1", [id]);
        res.json(plant.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
}

//gets plants by title search
const getPlantInfoByTitle = async (req, res) => {
    try {
        const { title } = req.params;
        const plant = await pool.query("select * from plant where upper(title) like upper($1)", [`${title}%`]);
        res.json(plant.rows);
    } catch (err) {
        console.error(err.message);
    }
}

//update plant
const updatePlant = async (req, res) => {
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
}

//delete a plant 
const deletePlant = async (req,res) => {
    try {
        const {id} = req.params;
        const deletePlant = await pool.query("Delete from plant where plant_id = $1", 
        [id]);
        res.json("Plant has been successfully deleted")
    } catch (err) {
        console.error(err.message);
    }   
}

module.exports = {
    create,
    getAllPlants,
    getPlantById,
    getPlantInfoByTitle,
    updatePlant,
    deletePlant
}