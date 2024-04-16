const prompt = require('prompt-sync')();

// Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
// média calculada seja menor que 6,0

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a primeira nota: "))
let media = (nota1 + nota2) / 2

if(media >= 6){
    console.log('Parabens! Você foi aprovado')
}else {
    console.log('Você foi REPROVADO! Estude mais')
}