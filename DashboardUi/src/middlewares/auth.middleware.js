export function isAuthenticated() {
  const token = localStorage.getItem('token');

  if (!token) {
    return false;
  }

  const decodedToken = JSON.parse(atob(token.split('.')[1]));
  const tokenExpirationTime = decodedToken.exp * 1000;
  const currentTime = Date.now();

  if (currentTime >= tokenExpirationTime) {
    localStorage.removeItem('token');
    window.location.href = "/pages/auth/";
    return false;
  }
  
  return true;
}



export function logout(){

  const modalLogout = document.querySelector('.modal-logout')
  const btnConfirm = document.querySelector('.btnClose')
  const btnClose = document.querySelector('.btnok')

  document.getElementById('btnLogout').addEventListener("click", function(event){
    event.preventDefault();
  
    modalLogout.classList.add('active');
  
    btnConfirm.onclick = e =>{
      e.preventDefault();
      console.log('fechou cancelar')
      localStorage.removeItem('token');
          window.location.href = '/pages/auth/index.html';
    }
    btnClose.onclick = e => {
      e.preventDefault();
      modalLogout.classList.remove('active')
    }
  })
}

export function modalSucesso(){
  
  const modal = document.getElementById('bg');

  modal.classList.add('active');
        setTimeout(() => {
        modal.classList.remove('active');
        }, 6000);
}