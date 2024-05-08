const prompt = require('prompt-sync')();

//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let num = parseInt(prompt('Informe o numero: '))

for(let i = 1; i<=10; i++){
    console.log(`${i} Rodada - ${num}`)
}