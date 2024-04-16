const prompt = require('prompt-sync')();

// 14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.


let soma = 0;
let quantidade = 0
let numeros = parseFloat(prompt('digite o numero: '));

while(numeros!=0){
    soma += numeros
    quantidade+=1
    numeros = parseFloat(prompt('digite o numero: '))  
}

let media = soma / quantidade

console.log(`A media Aritimetica dos numeros é : ${media}`)
