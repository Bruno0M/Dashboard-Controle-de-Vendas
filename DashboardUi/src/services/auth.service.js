import { environment } from "../environments/environments.js";

document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = `${environment.ApiUrl}/User`

  document.getElementById("form-register").addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var _data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }

    var options = {
      method: "POST",
      body: JSON.stringify(_data),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    }

    fetch(`${apiUrl}/RegisterUser`, options)
      .then(response => {
        if(!response.ok) throw new Error(response.statusText());
        return response;
      })
      .then(js)

    });

  document.getElementById("form-login").addEventListener("submit", function (event) {
    event.preventDefault();

    var emailLogin = document.getElementById("emailLogin").value;
    var passwordLogin = document.getElementById("passwordLogin").value;

    var _data = {
      email: emailLogin,
      password: passwordLogin,
    }

    var options = {
      method: "POST",
      body: JSON.stringify(_data),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    }

    fetch(`${apiUrl}/LoginUser`, options)
      .then(response => {
        if(!response.ok) throw new Error(response.statusText());
        return response;
      })
      .then(json => console.log(json))
      .catch(err => console.log(err));

  });
});