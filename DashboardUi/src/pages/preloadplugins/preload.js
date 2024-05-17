function loading(){
    const boxLoad = document.getElementsByClassName('box-load')[0];
    const content = document.getElementsByClassName('content')[0];
    
    boxLoad.classList.add('load-complete');
    
    setTimeout(() => {
        boxLoad.style.display = "none";
        content.style.display = "block";
        content.classList.add('fade-in');
    }, 1000); // Tempo correspondente à duração da animação de loadComplete
}
