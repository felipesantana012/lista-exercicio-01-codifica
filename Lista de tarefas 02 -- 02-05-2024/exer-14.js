// Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados

const prompt = require('prompt-sync')();


let nomes = []
for(let i = 7; i>=1; i--){
    let nome = prompt('Digite o nome: ')
    nomes[i] = nome
}

console.table(nomes);