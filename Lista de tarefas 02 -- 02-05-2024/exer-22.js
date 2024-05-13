// 2. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
// dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a
// média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
// 350,00.

const prompt = require('prompt-sync')();


let habitantes = [
    /* Salarios */ [1000,2000,5000,4000,340],
    /* Filhos  */  [4,5,2,5,2]
]

let condicaoAdd = 's'
while(condicaoAdd === 's'){
    let salario = parseFloat(prompt('Informe o salario: '))
    let qntFilhos = parseInt(prompt('Quantidades de Filhos: '))
    habitantes[0].push(salario)
    habitantes[1].push(qntFilhos)
    condicaoAdd = prompt('Deseje adicionar mais Dados? : ')
}
 

const pesquisaPrefeitura = (habitantes) =>{

    let somaSalario = 0
    let somaFilhos = 0
    let maiorSalario = habitantes[0][0]
    let qntSalarioAte350 = 0
    
    for(let i =0; i<habitantes[0].length; i++){
        somaSalario += habitantes[0][i];
        somaFilhos += habitantes[1][i]
    
         if(habitantes[0][i] > maiorSalario){
            maiorSalario = habitantes[0][i]
         }
         if(habitantes[0][i] <= 350){
            qntSalarioAte350 ++
         }
    }
    
    let mediaSalario = somaSalario / habitantes[0].length
    let mediaNumFlhos = somaFilhos / habitantes[1].length
    let percentualSalarioAte350 = (qntSalarioAte350 / habitantes[0].length)*100

    return [mediaSalario,mediaNumFlhos,maiorSalario,percentualSalarioAte350]

}

let resultado = pesquisaPrefeitura(habitantes)

console.log('------------------------------------')
console.log(`Media Salario : ${resultado[0]}`)
console.log(`Media Numero Flhos : ${resultado[1]}`)
console.log(`Maior Salario : ${resultado[2]}`)
console.log(`Percentual Salario Ate 350$ : ${resultado[3]}%`)