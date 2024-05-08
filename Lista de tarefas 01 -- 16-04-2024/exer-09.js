const prompt = require('prompt-sync')();

//8. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
// do mesmo, conforme a tabela abaixo:

let codigo = parseInt(prompt('informe o codigo: '))

switch (codigo) {
    case 1:
        console.log('Sul')
        break;
    case 2:
        console.log('Norte')
        break;
    case 3:
        console.log('Leste')
        break;
    case 4:
        console.log('Oeste')
        break;
    case 5:
    case 6:
        console.log('Nordeste')
        break;
    case 7:
    case 8:
    case 9:
        console.log('Suldeste')
        break;
    default:
        if(codigo >=10 && codigo<=20 ){
            console.log('Centro-Oeste')
        }else if(codigo >=25 && codigo<=50 ){
                console.log('Sudoeste')
        }else{
            console.log('Produto Importado')
        }
        break;
}