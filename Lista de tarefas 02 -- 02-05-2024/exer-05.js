// . Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require('prompt-sync')();

let vencedor = ""
const opcoes = ['pedra', 'papel', 'tesoura']

let opcaoUsuario = parseInt(prompt('Escolha (0 para Pedra) | (1 para Papel) | (2 para Tesoura): '))
let opcaoCPU =  Math.floor(Math.random() * opcoes.length) 


if(opcaoUsuario == 0 && opcaoCPU == 1){
    vencedor = 'Vitoria do CPU'  
}
else if(opcaoUsuario == 0 && opcaoCPU == 2 ){
    vencedor = 'Vitoria do USUARIO'  
}
else if(opcaoUsuario == 1 && opcaoCPU == 0 ){
    vencedor = 'Vitoria do USUARIO'  
}
else if(opcaoUsuario == 1 && opcaoCPU == 2 ){
    vencedor = 'Vitoria do CPU'  
}
else if(opcaoUsuario == 2 && opcaoCPU == 0 ){
    vencedor = 'Vitoria do CPU'  
}
else if(opcaoUsuario == 2 && opcaoCPU == 1 ){
    vencedor = 'Vitoria do USUARIO'  
}else{
    vencedor = 'EMPATE'
}


console.log(`CPU : ${opcoes[opcaoCPU]} ` )
console.log(`USUARIO : ${opcoes[opcaoUsuario]} ` )
console.log(`Resultado final : ${vencedor}`);


