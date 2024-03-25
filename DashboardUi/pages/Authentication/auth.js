import { isAuthenticated } from "../userIsAuth.js";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form-register").addEventListener("submit", function (event) {
    event.preventDefault();

    const url = "http://localhost:4652/api/User/RegisterUser"

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

    fetch(url, options)
      .then(response => {
        if(!response.ok) throw new Error(response.statusText());
        return response;
      })
      .then(js)

  });
});


document.addEventListener("DOMContentLoaded", function () {
  if (isAuthenticated()) window.location.href = "../teste.html";
  document.getElementById("form-login").addEventListener("submit", function (event) {
    event.preventDefault();

    const url = "http://localhost:4652/api/User/LoginUser"

    // var emailLogin = document.getElementById("emailLogin").value;
    // var passwordLogin = document.getElementById("passwordLogin").value;

    var emailLogin = "bruno@bruno.com";
    var passwordLogin = "12345678";

    var _data = {
      email: emailLogin,
      password: passwordLogin,
    }

    var options = {
      method: "POST",
      body: JSON.stringify(_data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }

    fetch(url, options)
      .then(response => {
        if(!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then(responseToken => {
        localStorage.setItem('token', responseToken.data.token);
        console.log(responseToken.data.token);
        window.location.href = "../teste.html";
      })
      .catch(err => console.log(err));
  });
});

