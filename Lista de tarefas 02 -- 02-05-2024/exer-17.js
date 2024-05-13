
// 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// os dados das pessoas menores de idade

const prompt = require('prompt-sync')();

let nomes = []
let idade = []
for(let i=0; i<9; i++){
    nomes[i] = prompt('Infome seu nome: ')
    idade[i] = parseInt(prompt('Informe sua idade: '))
}

idade.map((elemento, index) =>{
    if(elemento<18){
        console.log(`${nomes[index]} tem ${elemento} de idade`)
    }
})

