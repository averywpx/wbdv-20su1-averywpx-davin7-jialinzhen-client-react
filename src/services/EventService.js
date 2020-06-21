export const findEventsForClub = (cid) =>
    fetch(`http://localhost:8080/api/clubs/${cid}/events`)
        .then(response => response.json())

export const createAEvent = (cid, newEvent) =>
    fetch(`http://localhost:8080/api/clubs/${cid}/events`, {
        method: 'POST',
        body: JSON.stringify(newEvent),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteEvent = (eid) =>
    fetch(`http://localhost:8080/api/events/${eid}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export default {
    findEventsForClub,
    createAEvent,
    deleteEvent
    // updateClub
}