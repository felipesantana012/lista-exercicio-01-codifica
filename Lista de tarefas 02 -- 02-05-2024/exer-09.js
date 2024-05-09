// Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.

const prompt = require('prompt-sync')();

let somaSalarioHomens = 0
let somaSalarioMulheres = 0
let salario = 0
let sexo = ''
let desejaContinuar = 's'

while(desejaContinuar == 's'){

    sexo = prompt('Qual o Sexo : ( m ) ou ( f ): ')
    salario = parseFloat(prompt('Informe o salario: '))
    
    if(sexo == 'm'){
        somaSalarioHomens += salario
    }else{
        somaSalarioMulheres += salario
    }

    desejaContinuar = prompt('Deseja continurar ? ( s ) ou ( n ) :')
}

console.log(`Total Salario Pago aos Homens: ${somaSalarioHomens}`);
console.log(`Total Salario Pago aos Mulheres: ${somaSalarioMulheres}`);