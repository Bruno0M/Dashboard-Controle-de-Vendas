document.addEventListener("DOMContentLoaded", function (event) {
    event.preventDefault();

    const preLoad = document.getElementById('button-preLoad')
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const urlParams = new URLSearchParams(window.location.search);
    const adicionarClasseActive = urlParams.get('active');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");

    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    if (adicionarClasseActive === 'true') {
        container.classList.add('active');
    }

    preLoad.addEventListener('click', () => {
        preLoad.classList.add('loading');

        setTimeout(() => {
            preLoad.classList.remove('loading')
        }, 5000)
    });

});