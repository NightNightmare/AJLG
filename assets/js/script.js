function showMenu() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

//animação e função do "botão de scroll para o top com progresso do scroll"

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progresso");
    let progressValue = document.getElementById("valor-progresso");
    let pos = document.documentElement.scrollTop;
    //console.log(pos); para pegar o valor da tela
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //console.log(calcHeight) pra saber a altura exata k precisamos
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if(pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = 'conic-gradient(#7f37c9 $[scrollValue]%, #d7d7d7 ${scrollValue}%)';
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;