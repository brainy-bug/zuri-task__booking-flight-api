const flights = new Map()

let latestFLightId = 10

const flight = {
    flightId: 10,
    title: "flight to canada",
    time: "1pm",
    price: 26000,
    date: new Date('June 26, 2022'),
    status: "Active"
}

flights.set(flight.flightId, flight);

function getAllFlights() {
    return Array.from(flights.values())
}

function addNewFlight(flight) {
    latestFLightId++
    flights.set(latestFLightId,
        Object.assign(flight, {
            status: "Active",
            flightId: latestFLightId,
        }))
}

function existsFlightWithId(flightId) {
    return flights.has(flightId)
}

function deleteFlightbyId(flightId) {
    return flights.delete(flightId);
}

function getExistingFlight(flightId) {
    return flights.get(flightId)
}

function updateExistingFlight(flightId, updatedFlight) {
    const flight = getExistingFlight(flightId);

    flights.set(flightId,
        Object.assign(flight, updatedFlight))
}

module.exports = {
    getAllFlights,
    addNewFlight,
    existsFlightWithId,
    deleteFlightbyId,
    getExistingFlight,
    updateExistingFlight
}