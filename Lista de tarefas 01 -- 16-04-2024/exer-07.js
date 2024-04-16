const prompt = require('prompt-sync')();

// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let qntMacas = parseInt(prompt('Quantidades de maças que vai comprar: '))
let total = 0
if(qntMacas < 12){
    total = qntMacas * 0.30
}else{
    total = qntMacas * 0.25
}

console.log(`Total a pagar é: ${total}`)