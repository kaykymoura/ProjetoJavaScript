let cpf = "12345678912";

function formatarCPF(cpf) {
    cpf = cpf.slice(0, 11); 

    const parte1 = cpf.slice(0, 3); 
    const parte2 = cpf.slice(3, 6);
    const parte3 = cpf.slice(6, 9);  
    const parte4 = cpf.slice(9, 11); 

    return `${parte1}.${parte2}.${parte3}-${parte4}`;
}

console.log(formatarCPF(cpf));
