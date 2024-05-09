// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

const prompt = require('prompt-sync')();

let num1 = 1
let num2 = 0
let array = []
for(let i = 1; i<=10; i++){
    let proxNum = num1 + num2
    console.log(proxNum)
    num1 = num2
    num2 = proxNum
}