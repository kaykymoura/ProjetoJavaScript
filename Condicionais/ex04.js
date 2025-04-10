var prompt = require('prompt-sync')();

let senhaCorreta = 4002;

let senhaDigitada = Number(prompt("Ola, digite a senha: "))

if (senhaDigitada == senhaCorreta) {
    console.log("Senha correta");
} else {
    console.log("Senha incorreta")
}

