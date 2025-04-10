var prompt = require('prompt-sync')();

let valor = prompt("Ola, digite o valor: ")

if (valor >= 1) {

    console.log("O Valor e positivo");

} else if (valor < 0) {

    console.log("O Valor e negativo");
}
else {
    console.log("O Valor e zero")
}
