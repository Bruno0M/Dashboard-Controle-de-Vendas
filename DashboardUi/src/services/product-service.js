import { devEnvironment, environment } from "../environments/environments.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

var token = localStorage.getItem('token');
const apiUrl = `${environment.ApiUrl}/Product`

document.addEventListener("DOMContentLoaded", function () {
  if (!isAuthenticated()) window.location.href = "/pages/auth/";



  document.getElementById("btnSalvar").addEventListener("click", function (event) {
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
        return response.json();
      })
      .then(newProduct => {
        const newRow = insertItem(newProduct);
        document.getElementById('product-rows').insertAdjacentHTML('beforeend', newRow);
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
});

function insertItem(product) {
  const row = `
    <tr>
    <td>${product.categoria}</td>
    <td>${product.name}</td>
    <td>R$ ${product.price}</td>
    <td>${product.quantidade}</td>
    <td class="acao">
      <button onclick="editItem()"><i class='bx bx-edit'></i></button>
    </td>
    <td>
      <button id="${product.id}"><i class='bx bx-trash'></i></button>
    </td>
    </tr>`;

  setTimeout(() => {
    const deleteButton = document.getElementById(product.id);
    deleteButton.addEventListener('click', () => {
      console.log(product.id)
      deleteItem(product.id);
    });
  }, 0);

  return row;
}

function displayProducts(data) {
  const productRows = data.data.map(product => insertItem(product));
  document.getElementById('product-rows').innerHTML = productRows.join('');
}


function deleteItem(productId) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: 'Bearer ' + token
    },
  }

  const row = document.getElementById(productId).parentNode.parentNode;

  fetch(`${apiUrl}?id=${productId}`, options)
    .then(response => {
      if (response.ok) {
        row.remove();
        console.log("ok")
      } else {
        console.error('Erro ao excluir produto:', response.status);
      }
    })
    .catch(error => console.error('Erro na requisição:', error));
}