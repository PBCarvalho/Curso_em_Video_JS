function contar() {
    let inicio = document.querySelector('#numInicio').value
    let fim = document.getElementById('numFim').value
    let passo = document.getElementById('numPasso').value
    let resposta = document.querySelector('#resposta')


    if (inicio.length == 0 || fim.length == 0) {
        resposta.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    } else {
        resposta.innerHTML = 'Contando: <br>'

        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)

        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            for(let c = i; c <= f; c += p) {
                resposta.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                resposta.innerHTML += ` ${c} \u{1F449}`
            }
        }
        resposta.innerHTML += `\u{1F3C1}`
    }
}
