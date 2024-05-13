// 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
// retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
// = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.


const prompt = require('prompt-sync')();

function calculoPesoIdeal(altura, sexo){
    let pesoIdeal = 0
    if(sexo == 'm'){
        pesoIdeal = 72.7 * altura - 58
    }else{
        pesoIdeal = 61.1 * altura - 44.7
    }
    return pesoIdeal.toFixed(2)
}


let altura = parseFloat(prompt('Qual sua altura: '))
let sexo = prompt('Qual seu sexo: ')


console.log(calculoPesoIdeal(altura,sexo));