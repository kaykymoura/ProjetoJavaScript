let agora = new Date();
let horaBrasilia = agora.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
console.log(horaBrasilia);
//Pegar somente o ano 
console.log(agora.getFullYear());
//Pegar apenas o mes
console.log((agora.getMonth()));
//Pegar aoenas o dia
console.log(agora.getDay());

