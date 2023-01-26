function contar() {
    let inicio = document.querySelector('#numInicio').value;
    let fim = document.getElementById('numFim').value;
    let passos = document.getElementById('numPassos').value;
    let resposta = document.querySelector('#resposta');


    if (inicio == '') {
        resposta.innerHTML = 'Impossível contar!' 
    } else if (passos == 0) {
        alert('Passo inválido! Considerando PASSO 1');
    } else {
        let ini = Number(inicio)
        let fim = Number(fim)
        let pas = Number(passos)

        for(let x = ini; x <= fim; x += pas) {

        }
    }    
}
