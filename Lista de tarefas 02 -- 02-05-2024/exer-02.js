
// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km h-1
// , exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require('prompt-sync')();

let velocidadeDoCarro = parseFloat(prompt('Velocidade do Veiculo: '))

let valorMultaPorKm = 5
let velocidadelimite = 80
let totalMultaPagar = (velocidadeDoCarro - velocidadelimite) * valorMultaPorKm

if(velocidadeDoCarro > velocidadelimite){
    console.log(`Voce foi multado. Valor a pagar : ${totalMultaPagar.toFixed(2)}$`)
}

