function verificar() {
    var data = new Date();
    var ano = data.getFullYear();

    var anoNascimento = document.getElementById('txtano');
    var resposta = document.querySelector('#resposta');

    if (anoNascimento.value.length == 0 || anoNascimento.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        var sexo = document.getElementsByName('radsex');
        var idade = ano - anoNascimento.value;

        var gênero = '';

        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        img.style.width = '250px';
        img.style.height = '250px';
        img.style.borderRadius = '50%';
        img.style.margin = '10px';

        if(sexo[0].checked) {
            gênero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './assets/criança-menino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', './assets/jovem-menino.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', './assets/adulto-menino.jpg')
            } else {
                img.setAttribute('src', './assets/idoso-menino.jpg')
            };
        } else {
            gênero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './assets/criança-menina.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', './assets/jovem-menina.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', './assets/adulto-menina.jpg')
            } else {
                img.setAttribute('src', './assets/idoso-menina.jpg')
            };
        };
        resposta.style.textAlign = 'center';
        resposta.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
        resposta.appendChild(img);
    };
}