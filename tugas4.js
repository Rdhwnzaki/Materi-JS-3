import fetch from 'node-fetch'
fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
    response.json().then(function (users) {
        users.forEach(function (user) {
            console.log(user.name)
        });
    });
}).catch(err => console.error(err));