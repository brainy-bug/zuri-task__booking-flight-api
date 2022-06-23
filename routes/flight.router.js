const express = require('express');

const flightsRouter = express.Router();
const {
    httpGetAllFlights,
    httpAddNewFlight,
    httpEditFlight,
    httpAbortFlight,
} = require('../controllers/flight.controller');

flightsRouter.get('/', httpGetAllFlights);
flightsRouter.post('/', httpAddNewFlight);
flightsRouter.put('/:id', httpEditFlight);
flightsRouter.delete('/:id', httpAbortFlight);

module.exports = flightsRouter;

