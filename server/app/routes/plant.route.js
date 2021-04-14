
const plants = require("../controllers/plant.controller.js");

var router = require("express").Router();

router.route("/plants").post(plants.create);

router.route("/plants").get(plants.getAllPlants);

router.route("/plants/:id").get(plants.getPlantById);
 
router.route("/plants/:id").put(plants.updatePlant);

router.route("/plants/:id").delete(plants.deletePlant);

module.exports = router;