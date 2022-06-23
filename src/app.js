const express = require('express')

const flights = require("../controllers/flight.controller");
const models = require("./models/flight.model");

const routes = require("../routes/flight.router");

const app = express();

app.use(express.json());

//routes
app.use("/flights", routes);

module.exports = app



