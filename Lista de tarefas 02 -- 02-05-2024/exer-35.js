// 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
// conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
// estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
// vetor pode ser preenchido quantas vezes forem necessárias.

const prompt = require('prompt-sync')();

let impares = []


let pares = []


for(let valores =0; valores<15; valores++){
   
    
    if(valores %2==0){
        if(pares.length <= 4){
            pares.push(valores)
        }else{
            console.log('Terminada a leitura')
        }    
    }else{
        if(impares.length <= 4){
            impares.push(valores)
        }else{
            console.log('Terminada a leitura')
        }    
    }
}

console.log(impares)
console.log(pares)