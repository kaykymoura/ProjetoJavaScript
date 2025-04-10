var prompt = require('prompt-sync')();

let senhaCorreta = 2323;
let senhaDigitada = Number(prompt("Olá, digite a senha: "));

while (senhaDigitada !== senhaCorreta) {
    console.log("Senha incorreta");
    senhaDigitada = Number(prompt("Tente novamente: "));
}

console.log("Acesso Autorizado");
