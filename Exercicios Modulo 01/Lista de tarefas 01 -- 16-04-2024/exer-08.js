const prompt = require('prompt-sync')();

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

let valor1 = parseFloat(prompt('Valor 1: '));
let valor2 = parseFloat(prompt('Valor 2: '));;

if(valor1 != valor2){
    if(valor1>valor2){
        console.log(valor2 + ", " + valor1)
    }else{
        console.log(valor1 + ", " + valor2)
    }
}else{
    console.log('valores são iguais')
}