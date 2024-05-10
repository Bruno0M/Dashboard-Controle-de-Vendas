document.addEventListener("DOMContentLoaded", function (event) {

  event.preventDefault()
  
    const btnRegister = document.getElementById('btn-register');
    btnRegister.addEventListener('click', () => {
      window.location.href = '/pages/auth/index.html?active=true';
    });
  });
  