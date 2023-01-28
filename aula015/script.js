let num = [8, 1, 9, 6, 7, 2]

//console.log(num)

//console.log(`${num.sort()}`)

num.push(5, 4, 0, 3)
num.pop()

/*for (let pos = 0; pos < num.length; pos++) {
    //console.log(`A posição ${pos} tem o valor "original" ${num[pos]}`)

    console.log(`A posição ${pos} tem o valor "ordenado" ${num.sort()[pos]}`)
}
*/

let numpos = 2
console.log(`O número ${numpos} está no índice ${num.indexOf(numpos)}`)
console.log('')

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}