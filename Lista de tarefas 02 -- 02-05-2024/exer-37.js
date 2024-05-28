// 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
// o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
// respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
// aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
// e mostre uma mensagem de “REPROVADO”, caso contrário.

let qntQuestoes = 20           // quantidade de questoes
let qntOpcaoRespostas = 5      // quantidade de opções de respostas em cada questaão
let qntAlunos = 50             // quantidade de alunos na turma
let qntAcertos = 7            //quantidade de acertos para ser aprovado


let alunosAprovados = [
    /* ID aluno*/       [],
    /* qntAcertosAluno*/ [],
]


//sorteando as respostas do gabarito
let gabarito = [];
for(let i=1; i<=qntQuestoes; i++){
    let quetaoGabarito = 0;
    quetaoGabarito = Math.floor(Math.random() * qntOpcaoRespostas)+1
    gabarito.push(quetaoGabarito)
}

//sorteado as respostas dos alunos
let respostasDosAlunos = []
for(let i =0; i<qntAlunos; i++){
    let respostaAluno = []
    for(let j =1; j <=qntQuestoes; j++){   
        let num = 0;
        num =  Math.floor(Math.random() * qntOpcaoRespostas)+1
        respostaAluno.push(num)
    }
    respostasDosAlunos.push(respostaAluno)
}


//verificando as respostas de cada aluno e comparando com o gabarito
for (let i = 0; i < respostasDosAlunos.length; i++) {
    let acertos = 0;
    respostasDosAlunos[i].forEach((element, index) => {
        if(element === gabarito[index]){
            acertos++
        }   
    })
    if(acertos > qntAcertos ){
        alunosAprovados[0].push(i+1)
        alunosAprovados[1].push(acertos)
    }else{
        console.log(`Aluno ${i+1} Esta Reprovado!`);
    }  
}



console.log("ALUNOS APROVADOS! NOTA MAIOR OU IGUAL: " +  qntAcertos );
for (let i = 0; i < alunosAprovados[0].length; i++) {
    console.log(`O aluno ${alunosAprovados[0]}, Obteve ${alunosAprovados[1]} Acertos.`);
    console.log("-----------------------------------------------------------");
}





