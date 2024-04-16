// Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
// valor correspondente em graus Fahrenheit.

const prompt = require('prompt-sync')();

let celsius = parseFloat(prompt("Temperatura em Graus Celsius : "))

let grausFahrenheit = celsius * 1.8 + 32

console.log(grausFahrenheit)