// Crie um programa que preencha automaticamente (usando lógica, não apenas
//     atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
//     da sequência de Fibonacc

const prompt = require('prompt-sync')();

let num1 = 1
let num2 = 0
let array = []
for(let i = 1; i<=15; i++){
    let proxNum = num1 + num2
    array.push(proxNum)
    num1 = num2
    num2 = proxNum
}
console.log(array)