import { devEnvironment, environment } from "../environments/environments.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { openModalInsert, openModalRemove } from "../pages/dashboard-produtos/dashboard-produtos.js"; 

var token = localStorage.getItem('token');
const apiUrl = `${environment.ApiUrl}/Product`

document.addEventListener("DOMContentLoaded", function () {

  if (!isAuthenticated()) window.location.href = "/pages/auth/";

});

  document.getElementById("btnSalvar").addEventListener("click", function (event) {
    event.preventDefault();

    var categoria = document.getElementById("m-categoria").value;
    var produto = document.getElementById("m-produto").value;
    var valor = document.getElementById("m-valor").value;
    var quantidade = document.getElementById("m-quantidade").value;

    var _data = {
      name: produto,
      category: categoria,
      price: valor,
      quantity: quantidade
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
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then(data => {
        
        const newRow = insertItem(data.data);
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


function insertItem(product) {
  const row = `
    <tr>
    <td>${product.category}</td>
    <td>${product.name}</td>
    <td>R$ ${product.price}</td>
    <td>${product.quantity}</td>
    <td>
      <button id="sell-${product.id}"><i class='bx bx-purchase-tag-alt'></i></button>
    </td>
    <td>
      <button id="delete-${product.id}"><i class='bx bx-trash'></i></button>
    </td>
    </tr>`;

  setTimeout(() => {

    const deleteButton = document.getElementById(`delete-${product.id}`);
    const deleteButtonId = deleteButton.id;

      deleteButton.addEventListener('click', function(){
        openModalRemove(deleteButtonId);
        document.getElementById("sim").addEventListener('click', function (){
          deleteItem(product.id);
         });
      });

  }, 0);
  setTimeout(() => {

    const sellButton = document.getElementById(`sell-${product.id}`);
    sellButton.addEventListener('click', () => {


      console.log(product.id)
      openModalInsert();

      document.getElementById("btnSalvar").addEventListener("click", function () {
        sellItem(product.id);
      });

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

  const row = document.getElementById(`delete-${productId}`).parentNode.parentNode;

  fetch(`${apiUrl}?productID=${productId}`, options)
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

function sellItem(productId) {
  const quantidade = document.querySelector('#m-quantidade').value

  var _data = {
    id: productId, 
    quantity: quantidade,
  }

  var options = {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: 'Bearer ' + token
    },
  }

  fetch(`${apiUrl}/ReportSale`, options)
    .then(response => {
      if (response.ok) {
        console.log("ok")
      } else {
        console.error('Erro ao VENDER produto:', response.status);
      }
    })
    .catch(error => console.error('Erro na requisição:', error));
}

