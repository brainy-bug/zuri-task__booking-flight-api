const express = require('express')

const routes = require("../routes/flight.router");

const app = express();

app.use(express.json());

//routes
app.use("/flights", routes);

module.exports = app



