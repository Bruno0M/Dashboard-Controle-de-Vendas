import { devEnvironment, environment } from "../environments/environments.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";


document.addEventListener("DOMContentLoaded", function () {
  if (!isAuthenticated()) window.location.href = "/pages/auth/";

  const apiUrl = `${environment.ApiUrl}/Product`

  var token = localStorage.getItem('token');

  document.getElementById("form-modal-product").addEventListener("submit", function (event) {
    event.preventDefault();

    var categoria = document.getElementById("m-categoria").value;
    var produto = document.getElementById("m-produto").value;
    var valor = document.getElementById("m-valor").value;
    var quantidade = document.getElementById("m-quantidade").value;

    var _data = {
      name: produto,
      categoria: categoria,
      price: valor,
      quantidade: quantidade
    }

    var options = {
      method: "POST",
      body: JSON.stringify(_data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: 'Bearer ' + token
      }
    }

    fetch(`${apiUrl}`, options)
      .then(response => {
        if (!response.ok) throw new Error(response.statusText());
        return response;
      })
      .then(json => console.log(json))
      .catch(err => console.log(err));

  });

  var options = {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: 'Bearer ' + token
    },

  }

  fetch(`${apiUrl}`, options)
    .then(response => {
      if (!response.ok) throw new Error(response.statusText());
      return response.json()
    })
    .then(data => displayProducts(data))
    .then(json => console.log(json))
});

function insertItem(product) {
  return `
    <tr>
    <td>${product.name}</td>
    <td>${product.categoria}</td>
    <td>R$ ${product.price}</td>
    <td>${product.quantidade}</td>
    </tr>`;
}

function displayProducts(data) {
  const productRows = data.data.map(product => insertItem(product));
  document.getElementById('product-rows').innerHTML = productRows.join('');
}