// . Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
// um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
// do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
// número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
// o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
// mensagem "Parabéns, tu foi o GANHADOR".


let qntDeNumerosSorteados = 4;
let qntFinalNumeros = 20;  
let qntApostadores = 10000;

//sorteando os numeros da loteria guardando no array e depois ordenando
function sorteador(array){
    for (let i = 0; i < qntDeNumerosSorteados; i++) {
    let num = Math.floor(Math.random() * qntFinalNumeros)
    while(array.indexOf(num) > -1){
        num = Math.floor(Math.random() * qntFinalNumeros)
    }
    array.push(num)
    }
    array.sort((a, b) => Number(a) - Number(b));
    return array
}

let gabarito = []
sorteador(gabarito)

let apostadores = [
    /* numCartao = */ [],
    /* numSorteados = */ []
]

let ganhadores = []

for (let i = 0; i < qntApostadores; i++) {
   
    apostadores[0].push(i)
    let numSorteados = []

    sorteador(numSorteados)

    apostadores[1].push(numSorteados)

    let acertos = []
    acertos = apostadores[1][i].filter(value => gabarito.includes(value));
    acertos.sort((a, b) => Number(a) - Number(b));
    if(acertos.length >= qntDeNumerosSorteados){
        let mensagem = `O jogador ${i} acertou todos os numeros: ${acertos}. "Parabéns, tu Ganhou uma bolada".`
        ganhadores.push(mensagem)
    }
}


console.log("");
console.log(`Numeros da loteria : ${gabarito}`);
console.log("");
console.log(`Ganhdores:` );
ganhadores.forEach((item) => {
    console.log(item)
    console.log("-----------------");
})

