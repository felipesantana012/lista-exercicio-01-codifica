// Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS)

const prompt = require('prompt-sync')();

   

let tabela = [
    ['12345', '54322'],
    ['felipe santana', 'romeu silva'],
    [2000, 3000]
]

let condicaoAdd = 's'
while(condicaoAdd === 's'){
    let matricula = prompt('informe a matricula: ')
    let nome = prompt('Infome o nome: ')
    let salarioBruto = parseFloat(prompt('Infome o salario Bruto: '))
    tabela[0].push(matricula)
    tabela[1].push(nome)
    tabela[2].push(salarioBruto)
    condicaoAdd = prompt('Deseje adicionar mais funcionarios: ')
}


for(let i =0; i<tabela[0].length; i++){ 
    let inss = tabela[2][i] * 12 / 100
    let salarioLiquido = tabela[2][i] - inss
    console.log(`Matricula: ${tabela[0][i]}`);
    console.log(`Nome: ${tabela[1][i]}`);
    console.log(`Salario Bruto: ${tabela[2][i]} R$`);
    console.log(`Desconto INSS: ${inss} R$`);
    console.log(`Salario Liquido: ${salarioLiquido} R$`);
    console.log('---------------------------------')
}
