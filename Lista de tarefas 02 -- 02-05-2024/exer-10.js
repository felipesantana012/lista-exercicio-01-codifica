// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require('prompt-sync')();

let numeros = 0
let somaValores = 0
let qntTotal = 0
let menorValor = 999999999999999
let qntValorPar =0
let continuar = 's'

while(continuar == 's'){
    numeros = parseFloat(prompt('Informe o numero: '))
    somaValores += numeros
    qntTotal ++

    if(numeros %2==0){
        qntValorPar++
    }

    if(numeros < menorValor ){
        menorValor = numeros
    }

    continuar = prompt('Voce quer continuar: ( s ) ou ( n ): ')
}

let media = somaValores / qntTotal



console.log(`Soma total foi: ${somaValores}`)
console.log(`Menor numero foi: ${menorValor}`)
console.log(`Media dos valores foi: ${media}`)
console.log(`Quantidade de numeros Pares: ${qntValorPar}`)