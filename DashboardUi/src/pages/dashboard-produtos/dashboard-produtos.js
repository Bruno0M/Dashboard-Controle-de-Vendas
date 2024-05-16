
const modalInsert = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const categoria = document.querySelector('#m-categoria')
const produto = document.querySelector('#m-produto')
const valor = document.querySelector('#m-valor')
const quantidade = document.querySelector('#m-quantidade')
const btnSalvar = document.querySelector('#btnSalvar')

const modalRemove = document.querySelector('.modal-remove')
const btnRemove = document.getElementById('sim')
const btnCancel = document.getElementById('cancelar')

export function openModalRemove(productId){
  console.log(productId);
  modalRemove.classList.add('active');
  
  document.getElementById(productId).addEventListener("click", function (event){
      event.preventDefault();
      console.log('aqui');
      openModalRemove();
    });

      btnRemove.onclick = e => {
        e.preventDefault();
        modalRemove.classList.remove('active');
      };

      btnCancel.onclick = e =>{
        e.preventDefault();
        modalRemove.classList.remove('active');
      };

      modalRemove.onclick = e => {
        if (e.target.className.indexOf('modal-remove') !== -1){
          modalRemove.classList.remove('active');
        }
      };
  
}

  export function openModalInsert() {
    modalInsert.classList.add('active');

  }

  document.querySelector("#new").addEventListener("click", function (event){
    event.preventDefault();

    openModalInsert();

    btnSalvar.onclick = e => {
      e.preventDefault();
      modalInsert.classList.remove('active')
    }

    modalInsert.onclick = e => {
      if (e.target.className.indexOf('modal-container') !== -1){
        modalInsert.classList.remove('active')
      }
    }
  });






