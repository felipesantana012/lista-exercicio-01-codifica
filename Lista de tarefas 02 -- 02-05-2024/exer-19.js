
// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.

const prompt = require('prompt-sync')();

let horarios = []
for (let i = 0; i < 3; i++) {
   let horario = prompt(`Informe o ${i+1}° Horario: `)
  horarios.push( horario.split(/[^\w\s]/,3))
 if( horarios[i][0] > 24 ||  horarios[i][1] > 60 ||  horarios[i][2] > 60){
    console.log('Horario invalido')
    break
 }else{
    console.log(`${horario} Correto`)
 }
 
}

