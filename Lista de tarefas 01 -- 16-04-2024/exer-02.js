const prompt = require('prompt-sync')();

// 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
// votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
// em relação ao total de eleitores.

let qntEleitores = parseInt(prompt('Quantidade de Eleitores: '))
let qntVotosBrancos = parseInt(prompt('Quantidade de Votos Brancos: '))
let qntVotosNulos = parseInt(prompt('Quantidade de Votos Nulos: '))
let qntVotosValidos = qntEleitores - (qntVotosBrancos + qntVotosNulos)

let percentualVotosBrancos = (qntVotosBrancos *100) / qntEleitores
let percentualVotosNulos = (qntVotosNulos *100) / qntEleitores
let percentualVotosValidos = (qntVotosValidos *100) / qntEleitores

console.log(`${percentualVotosBrancos} % de Votos Brancos`)
console.log(`${percentualVotosNulos} % de Votos Nulos`)
console.log(`${percentualVotosValidos} % de Votos Validos`)
