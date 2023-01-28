let num = document.getElementById('numero')
let lista = document.querySelector('#lista')
let resposta = document.querySelector('#resposta')

let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        console.log(valores)

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        resposta.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let posicao in valores) {
            soma += valores[posicao]
            if(valores[posicao] > maior)
                maior = valores[posicao]
            if(valores[posicao] < menor)
                menor = valores[posicao]
        }
        media = soma / total
        resposta.innerHTML = ''
        resposta.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        resposta.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resposta.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resposta.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resposta.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}