export const createClub = (newClub) =>
    fetch(`http://localhost:8080/api/clubs`, {
        method: 'POST',
        body: JSON.stringify(newClub),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllClubs = () =>
    fetch(`http://localhost:8080/api/clubs`)
        .then(response => response.json())

export const deleteClub = (cid) =>
    fetch(`http://localhost:8080/api/clubs/${cid}`, {
        method: 'DELETE'
    })
        .then(response => response.json())


export const updateClub = (cid, newClub) =>
    fetch(`http://localhost:8080/api/clubs/${cid}`, {
        method: 'PUT',
        body: JSON.stringify(newClub),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    createClub,
    findAllClubs,
    deleteClub,
    updateClub
}