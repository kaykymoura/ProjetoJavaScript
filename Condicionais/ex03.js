var prompt = require('prompt-sync')();

let numero = Number(prompt("Olá, digite um numero: "));

if (numero % 2 == 0) {
    console.log("O Numero e par :)");
}
else{
    console.log("O Numero e impar :)");
}