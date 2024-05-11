// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.


const prompt = require('prompt-sync')();

let array = []

for (let i = 0; i <10; i++) {
    array[i] = parseFloat(prompt(`Digite o ${i+1}º Numero: `));      
}

array.forEach((element,index ) => {
    if(element %2==0){
        console.log(element + ' posição ' + index);
        }
})