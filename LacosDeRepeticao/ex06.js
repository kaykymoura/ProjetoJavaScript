var prompt = require('prompt-sync')();

let num =0;

do {
    
    num = Number(prompt("Digite uma idade: "))

} while (num <= 0);
{

    console.log("Idade valida :)")

}


