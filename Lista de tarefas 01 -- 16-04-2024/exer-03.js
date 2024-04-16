const prompt = require('prompt-sync')();

// 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
// ● Some 25 ao primeiro inteiro;
// ● Triplique o valor do segundo inteiro;
// ● Modifique o valor do terceiro inteiro para 12% do valor original;
// ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
// dos primeiros três inteiros.

let num1 = parseInt(prompt('Imforme o primeiro Numero: '));
let num2 = parseInt(prompt('Imforme o segundo Numero: '));
let num3 = parseInt(prompt('Imforme o terceiro Numero: '));
let num4 = parseInt(prompt('Imforme o quarto Numero: '));

let num1Alterado = num1 + 25 ;
let num2Alterado = num2 * 3 ;
let num3Alterado = num3*12 / 100 ;
let num4Alterado = num1 + num2 + num3 ;

console.log("")
console.log(`Primeiro numero era ${num1} e ficou ${num1Alterado}`)
console.log(`Segundo numero era ${num2} e ficou ${num2Alterado}`)
console.log(`Terceiro numero era ${num3} e ficou ${num3Alterado}`)
console.log(`Quarto numero era ${num4} e ficou ${num4Alterado}`)