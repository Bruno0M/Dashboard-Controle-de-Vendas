
const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const categoria = document.querySelector('#m-categoria')
const produto = document.querySelector('#m-produto')
const valor = document.querySelector('#m-valor')
const quantidade = document.querySelector('#m-quantidade')
const btnSalvar = document.querySelector('#btnSalvar')
  

  function openModal() {
    modal.classList.add('active');
  }

  document.querySelector("#new").addEventListener("click", function (event){
    event.preventDefault();

    openModal();

    btnSalvar.onclick = e => {
      e.preventDefault();
      modal.classList.remove('active')
    }

    modal.onclick = e => {
      if (e.target.className.indexOf('modal-container') !== -1){
        modal.classList.remove('active')
      }
    }
  });

