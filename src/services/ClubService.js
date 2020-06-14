const createClub = (club) =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/001477957/courses", {
        method: 'POST',
        body: JSON.stringify(club),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    createClub
}