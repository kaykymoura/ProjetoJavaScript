// Crie um sistema que permita cadastrar nomes. Antes de adicionar,
// verifique se o nome já está na lista (ignore maiúsculas/minúsculas). Se
// não estiver, adicione o usuário.
var prompt = require('prompt-sync')();

let  Nomes = ["Kayky", "Yasmin", "Erick", "Kaue", "Joao", "Isabelly"];


let nomeDigitado = prompt("Ola, Cadastre um nome: ").toLowerCase();

let nomesMinusculos = Nomes.map(nome => nome.toLowerCase());

if (nomesMinusculos.includes(nomeDigitado)) {
    console.log("Nome utilizado, digite um novo.");
} else {
    Nomes.push(nomeDigitado);
    console.log("Nome adicionado!");
}


