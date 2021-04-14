const express = require("express");
const app = express();
const cors = require("cors");
const router = require("../server/app/routes/plant.route");

//middleware
app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});