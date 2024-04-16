const prompt = require('prompt-sync')();

// 15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
// que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
// respectivos.

let numeros = parseFloat(prompt('Digite o numero: '))
let peso = parseFloat(prompt('Digite o Peso do numero: '))
let media =0;
while(numeros!=0 && peso!=0){
    media = (numeros*peso) /10
    console.log(`${numeros} com o peso ${peso} : valor media ${media}`)

    numeros = parseFloat(prompt('Digite o numero: '))
    peso = parseFloat(prompt('Digite o Peso do numero: '))
}

