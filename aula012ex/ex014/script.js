function carregar() {
    var msg = document.querySelector('#msg');
    var img = document.querySelector('#imagem');
    var data = new Date();
    //var hora = data.getHours();

    var hora = 15

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        img.scr = 'assets/manhã.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'assets/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'assets/noite.jpg'
        document.body.style.background = '#515154'
    }
}

