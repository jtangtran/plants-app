const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./app/routes/plant.route");
const PORT = process.env.PORT || 5000;
const path = require("path");

//middleware
app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname, "frontend/build")))

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "frontend/build")))
}

app.use('/', router);

//reroutes the user to the mainpage if the user enters an invalid route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});