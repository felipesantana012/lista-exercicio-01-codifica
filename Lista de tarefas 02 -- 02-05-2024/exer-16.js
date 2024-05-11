
// Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
// (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

const prompt = require('prompt-sync')();

let array = []

for(let i = 0; i<20; i++){
    let num = Math.floor(Math.random() * 99)
    while(array.indexOf(num) > -1){
        num = Math.floor(Math.random() * 5)
    }
    array.push(num) 
}

console.log(array);

// [...array] estou fazendo uma copia do array e colocado em arrayOrdenado para que não altere o array original;
let arrayOrdenado =  [...array].sort((num1, num2) => {
    return num1 - num2
})


console.log(arrayOrdenado)