import { devEnvironment, environment } from "../environments/environments.js";


document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = devEnvironment.ApiUrl


    var token = localStorage.getItem('token');

    var options = {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: 'Bearer ' + token
        },

    }

    fetch(`${apiUrl}/User`, options)
        .then(response => {
            return response.json()

        })
        .then(data => {
            const h3 = document.createElement("h3");
            h3.textContent = data.data[0].firstName + ' ' + data.data[0].lastName;

            var name = document.getElementById("user");
            name.appendChild(h3);
        });

});


