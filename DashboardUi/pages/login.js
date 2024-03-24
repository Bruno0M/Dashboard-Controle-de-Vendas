document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form-login").addEventListener("submit", function (event) {
    event.preventDefault();

    const url = "http://localhost:4652/api/User/LoginUser"

    var emailLogin = document.getElementById("email").value;
    var passwordLogin = document.getElementById("password").value;

    var _data = {
      email: emailLogin,
      password: passwordLogin,
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
      .then(json => console.log(json))
      .catch(err => console.log(err));

  });
});

