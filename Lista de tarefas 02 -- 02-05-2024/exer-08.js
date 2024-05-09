// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

const prompt = require('prompt-sync')();

let valorPorPonto = 0.05
let horasNoMes = 12
let pontosHora = 0

if(horasNoMes<=10){
    pontosHora = 2
}
else if(horasNoMes > 10 && horasNoMes<=20){
    pontosHora = 5
}
else[
    pontosHora = 10
]

let totalPontos = horasNoMes * pontosHora
let dinheiroGanho =  totalPontos * valorPorPonto

console.log(`Voce Ganhou ${totalPontos} pontos e faturou ${dinheiroGanho}R$`)