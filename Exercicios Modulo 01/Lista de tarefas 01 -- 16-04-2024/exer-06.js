const prompt = require('prompt-sync')();

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

//triangulo escaleno ex : 3 , 2 , 4 
//triangulo isósceles ex : 3 , 3, 4
//triangulo eqüilátero ex: 3 , 3 , 3

let ladoA =  parseFloat(prompt("Valor do lado A: "))
let ladoB =  parseFloat(prompt("Valor do lado B: "))
let ladoC =  parseFloat(prompt("Valor do lado C: "))

let ehTriangulo = ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB;

if(ehTriangulo == true){

    if(ladoA != ladoB && ladoA!=ladoC && ladoB!=ladoC){
        console.log('Triângulo escaleno')
    
    }else if(ladoA == ladoB && ladoB==ladoC){
        console.log('Triângulo eqüilátero')

    }else{
        console.log('Triângulo isósceles')
    }


} else{
    console.log('Os lados não formam um triangulo')
}

