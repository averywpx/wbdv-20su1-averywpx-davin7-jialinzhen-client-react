export const updateUser = (userId, user) =>
    fetch(`http://localhost:8080/api/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
    },
        credentials: "include"
})
        .then(response => response.json())