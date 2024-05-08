const prompt = require('prompt-sync')();


// 4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
// calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
// aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
// aprovação).

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a primeira nota: "))
let media = (nota1 + nota2) / 2

if(media >= 6){
    console.log('Parabens! Você foi aprovado')
}