import { devEnvironment, environment } from "../environments/environments.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

document.addEventListener("DOMContentLoaded", function () {
  if (isAuthenticated()) window.location.href = "/pages/dashboard-home/";
  const apiUrl = `${environment.ApiUrl}/Auth`

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

    fetch(`${apiUrl}/Register`, options)
      .then(response => {
        if(!response.ok) throw new Error(response.statusText());
        return response.json();
      })
      alert('Usuário registrado com sucesso!')

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

    fetch(`${apiUrl}/Login`, options)
      .then(response => {
        if(!response.ok) throw new Error(response.statusText());
        return response.json();
      })
      .then(resToken => {
        localStorage.setItem('token', resToken.data.token);
        window.location.href = "/pages/dashboard-home/"
      })
      .catch(err => console.log(err));

  });
});