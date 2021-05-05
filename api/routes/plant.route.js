//Routes 
const plants = require("../controllers/plant.controller.js");

var router = require("express").Router();

//Router logic for all the plants
router.route("/plants")
 .post(plants.create);
 .get(plants.getAllPlants);

//Router logic for specific plants 
router.route("/plants/:id")
 .get(plants.getPlantById);
 .put(plants.updatePlant);
 .delete(plants.deletePlant);

router.route("/plants/title/:title").get(plants.getPlantInfoByTitle);

module.exports = router;
