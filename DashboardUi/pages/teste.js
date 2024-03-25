import { isAuthenticated } from "./userIsAuth.js";

document.addEventListener("DOMContentLoaded", () => {
  if (!isAuthenticated()) console.log("aqui o");

  var token = localStorage.getItem('token');

  fetch('http://localhost:4652/api/Test', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
  })
    .then(response => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then(json => {
      document.getElementById('responseContainer').innerText = json.message
    })
    .catch(err => console.log(err));

});