
// Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

const prompt = require('prompt-sync')();

let segA = parseFloat(prompt('Segmento da reta 01:'))
let segB = parseFloat(prompt('Segmento da reta 02:'))
let segC = parseFloat(prompt('Segmento da reta 03:'))

if(segA < segB+segC && segB< segA+segC && segC< segA+segB){
   console.log(`Os lados informados forma um triangulo`);
}else{
    console.log(`Não é um triangulo`);
}