function tabuada() {
    let numero = document.getElementById('numTabuada').value
    let tab = document.querySelector('#tab')

    if(numero == 0) {
        alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = ''

        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}