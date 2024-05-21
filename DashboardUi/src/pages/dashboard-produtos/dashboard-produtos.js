import { logout } from "../../middlewares/auth.middleware";

logout();

const modalInsert = document.querySelector('.modal-container')
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
        console.log('click')
      }
    }
  });

const modalSell = document.querySelector('.modal-sell')

export function openModalSell(productId) {
  modalSell.classList.add('active');

  document.getElementById(productId).addEventListener("click", function (event){
    event.preventDefault();
  
    openModalSell();
  });
  
    btnSalvar.onclick = e => {
      e.preventDefault();
      modalSell.classList.remove('active')
    }
  
    modalSell.onclick = e => {
      if (e.target.className.indexOf('modal-sell') !== -1){
        modalSell.classList.remove('active')
        console.log('click')
      }
    }
  

}






