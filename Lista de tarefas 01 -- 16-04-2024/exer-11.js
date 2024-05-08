const prompt = require('prompt-sync')();

// 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
// cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
// ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
// NEGATIVO.


let valor = parseInt(prompt('Informe o numero: '))

while(valor!=null && valor>=0){
    if(valor %2==0){
        console.log(`${valor} é Par`)
        valor = parseInt(prompt('Informe o numero: '))
    }else{
        console.log(`${valor} é Impar`)
        valor = parseInt(prompt('Informe o numero: '))
    }
}