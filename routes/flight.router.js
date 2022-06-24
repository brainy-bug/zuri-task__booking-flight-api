const express = require('express');

const {
    httpGetAllFlights,
    httpAddNewFlight,
    httpEditFlight,
    httpDeleteFlight,
} = require('../controllers/flight.controller');

const flightsRouter = express.Router();

flightsRouter.get('/', httpGetAllFlights);
flightsRouter.post('/', httpAddNewFlight);
flightsRouter.put('/:id', httpEditFlight);
flightsRouter.delete('/:id', httpDeleteFlight);

module.exports = flightsRouter;

