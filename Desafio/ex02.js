//Crie um array de objetos com produtos e preços. Exiba no console o
//nome e o preço com R$ formatado.
var prompt = require('prompt-sync')();

// Array de produtos com preços
let produtos = [
    { nome: "caneta senai", preco: 8.00 },
    { nome: "bloquinho senai", preco: 12.00 },
    { nome: "computador senai", preco: 3500.00 },
    { nome: "carregador senai", preco: 136.00 }
];

// Exibindo os produtos e preços formatados
produtos.forEach(produto => {
    console.log(`${produto.nome} - R$ ${produto.preco.toFixed(2).replace(".", ",")}`);
});