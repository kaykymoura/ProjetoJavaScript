var prompt = require('prompt-sync')();

let mediaAprovada = 5;

let mediaDigitada = prompt("Ola, digite sua media: ")

if (mediaDigitada >= mediaAprovada) {
    console.log("Aluno Aprovado !!!")
} else {
    console.log("Aluno Reprovado :( ")
}
