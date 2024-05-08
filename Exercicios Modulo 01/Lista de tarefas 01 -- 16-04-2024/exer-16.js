const prompt = require('prompt-sync')();

// 16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.


for (let i = 50; i <= 100; i++) {
    let primo = true;
    
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            primo = false;
            break;
        }
    }
    
    if (primo === true) {
        console.log(i);
    }
}
