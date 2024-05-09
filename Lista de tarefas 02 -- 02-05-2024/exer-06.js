// Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.

const prompt = require('prompt-sync')();

let numSorteado =  Math.floor(Math.random() * 5) +1


let escolhaUsuario = prompt('Descubra o numero de 1 a 5 : ')

console.log(`O numero sorteado foi o ${numSorteado}`)
if(escolhaUsuario == numSorteado){   
    console.log('Voce Acertou!');
}else{
    console.log('Voce Errou!')
}