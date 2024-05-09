// . Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
//     Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
//     valores da sequência.

const prompt = require('prompt-sync')();


var primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA:"));
var razao = parseInt(prompt("Digite a razão da PA:"));
var soma = 0;


for (var i = 0; i < 10; i++) {
    var elemento = (i * razao) + primeiroTermo;
    console.log(`${i+1}° elemento: ${elemento}`);
    soma += elemento;
}


console.log(`Soma dos elementos da PA: ${soma}`);
