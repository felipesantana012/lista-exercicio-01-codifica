const prompt = require('prompt-sync')();

// 13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
// calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
// 1 x N = N
// 2 x N = 2N
// 3 x N = 3N

for(let i = 1; i<=5; i++){
    let numero = parseInt(prompt('Informe o numero: '))
    for(let j = 1; j<=numero; j++){
        let total = j * numero
        console.log(`${j} * ${numero} = ${total}`)
    }
}