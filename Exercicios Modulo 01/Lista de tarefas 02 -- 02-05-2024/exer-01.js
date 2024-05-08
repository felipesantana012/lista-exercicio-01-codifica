// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')();

let qntCigarrosFumadosPorDia = parseInt(prompt('Quantidade de cigarros que fuma em uma dia: '))
let qntAnosQueFuma = parseInt(prompt('Quantos anos voce fuma: '))
let minutosPorCigarro = 10


let totalCigarros = qntCigarrosFumadosPorDia * 365 * qntAnosQueFuma

let qntMinutosPerdidos = totalCigarros * minutosPorCigarro
let qntDiaPerdidos = qntMinutosPerdidos / (24*60)


console.log(`Você perdeu ${Math.floor(qntDiaPerdidos)} dias`);



// um dia tem  60*24 = 1440 minutos por dia
// um ano tem 1440 * 365 = 525600 minutos por ano