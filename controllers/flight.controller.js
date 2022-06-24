const {
    getAllFlights,
    addNewFlight,
    existsFlightWithId,
    deleteFlightbyId,
    getExistingFlight,
    updateExistingFlight
} = require('../src/models/flight.model');

function httpGetAllFlights(req, res) {
    return res.status(200).json(getAllFlights())
}

function httpAddNewFlight(req, res) {
    const flight = req.body;

    //check for missing flight properties
    if (!flight.title || !flight.time || !flight.price
        || !flight.date) {
        return res.status(400).json({
            error: "Missing required flight properties"
        });
    };


    flight.date = new Date(flight.date);

    //check for Invalid date
    if (isNaN(flight.date)) {
        return res.status(400).json({
            error: "Invalid flight Date"
        });
    };

    //Add new flight
    addNewFlight(flight);

    return res.status(201).json(flight);
}


function httpEditFlight(req, res) {
    const flightId = Number(req.params.id)
    const updatedFlight = req.body;

    //get existing flight
    const flight = getExistingFlight(flightId);

    //check for invalid flight
    if (!existsFlightWithId(flightId)) {
        return res.status(404).json({
            error: "flight not found"
        })
    }

    //check for Invalid date
    if (updatedFlight.date) {
        updatedFlight.date = new Date(updatedFlight.date);

        if (isNaN(updatedFlight.date)) {
            return res.status(400).json({
                error: "Invalid flight Date"
            });
        };
    }

    //update flight by id
    updateExistingFlight(flightId, updatedFlight)

    return res.status(201).json(flight);
}

function httpDeleteFlight(req, res) {
    const flightId = Number(req.params.id)

    //check for invalid flight
    if (!existsFlightWithId(flightId)) {
        return res.status(404).json({
            error: "flight not found"
        })
    }

    //delete flight by id
    deleteFlightbyId(flightId)
    return res.status(200).json({
        status: "Flight deleted"
    })
}


module.exports = {
    httpGetAllFlights,
    httpAddNewFlight,
    httpEditFlight,
    httpDeleteFlight,
}
