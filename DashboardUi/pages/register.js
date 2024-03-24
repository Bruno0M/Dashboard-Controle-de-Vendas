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

