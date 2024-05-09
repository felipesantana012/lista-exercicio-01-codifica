// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require('prompt-sync')();

let distanciaKM = parseInt(prompt('Distancia em Km: '))
let precoPassagemKm = 0
let precoPagar = 0

if(distanciaKM >0 && distanciaKM<=200){
    precoPassagemKm = 0.50
    precoPagar = precoPassagemKm * distanciaKM
    console.log(`Valor da passagem é : ${precoPagar}`)
}else {
    precoPassagemKm = 0.45
    precoPagar = precoPassagemKm * distanciaKM
    console.log(`Valor da passagem é : ${precoPagar}`)
}