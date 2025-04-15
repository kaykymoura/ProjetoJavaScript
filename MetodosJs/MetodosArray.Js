//.Length() => Tamanho

//let frutas = ["Maca", "Banana" , "Kiwi" , "Carambola" , "Morango" , "Ameixa" , "Abacaxi" , "Abacate" , "Jabuticaba" , "Roma" , "Seringuela" , "Embu" , "Caqui" , "Uva verde" , "Uva Roxa"];

//console.log(frutas.length)

//--------------------------------------------------------------------------------------------------------------------------------

// .reverse() => reverte nosso array
// let num = [70, 100 ,120 , 1000];

// num.reverse();

// console.log(num);

//--------------------------------------------------------------------------------------------------------------------------------

// let nomes = ["Valdemir" , "Edson" , "Anna" , "Ana"];

// // .push() => Adicionar no final 
// nomes.push("Matheus")

// // .unshift() => Adiciona no inicio
// nomes.unshift("Sophia");

// // .pop() => Remover no final
// nomes.pop();

// // .shift => Remove no inicio
// nomes.shift();

// // .splice => Adiciona ou remove elementos do arrays
// nomes.splice(0, 2)

// console.log(nomes);

//--------------------------------------------------------------------------------------------------------------------------------

// let nomesAnimais = ["Julie", "Meg" , "Kiara" , "Lola", "Sol"];

// // .Includes() => Se existe no array, se exisitir ele retorna true
// console.log(nomesAnimais.includes("Bob"));

//--------------------------------------------------------------------------------------------------------------------------------

// let valores = [30, 55, 90, 66];
// //Quero os valores maiores que 50

// filter => Filtra um array e retorna apenas os itens que atendem aos critérios definidos.
// const maiores = valores.filter(num => num > 50 );

// console.log(maiores)

//--------------------------------------------------------------------------------------------------------------------------------

// .map => cria um novo array com o resultado da função que você aplica em cada item do array original.

 // 1. Lista de nomes de alunos e notas 
//  let alunos = [
//    { nome: "Clara", nota: 8},
//    { nome: "Laura", nota: 10},
//    { nome: "Hiohanna", nota: 9},
//    { nome: "Isabelle", nota: 8},
//    { nome: "Isac", nota: 8},
//    { nome: "Silas", nota: 8}
//  ];
//  //Lista de nomes
//  let alunoNomes = alunos.map(itemdalista => itemdalista.nome);

//  //Funcao: 
//  let alunoNomesDois = alunos.map(function(aluno){
//     return aluno.nome;
//  });

//  //Lista de Notas
//  let alunoNota = alunos.map(aluno => aluno.nota);

//  console.log(alunoNomes);

//--------------------------------------------------------------------------------------------------------------------------------

// 2. Criar um array com mensages personaizadas
// let nomes = ["Caio", "Dani", "Ryan", "Vinicius"];

// let mensagem = nomes.map(itemDoArrayNomes =>`Ola, ${itemDoArrayNomes}`);
// // ou pode ser assim: let mensagem = nomes.map(itemDoArrayNomes => "Ola" + itemDoArrayNomes);

// console.log(mensagem);

//--------------------------------------------------------------------------------------------------------------------------------

// 3. Pegar apenas os primeiros caracteres de nomes

// let nomes = ["Isabelly", "Emilly", "Machado", "Guilherme"];

// let inicialNomes = nomes.map(itemNomes => itemNomes[0]);

// console.log(inicialNomes);


//--------------------------------------------------------------------------------------------------------------------------------

// 4. Kaue@gmail.com , Pedro@hotmail.com , Juliaoutlook.com

let emails = [
    "Kaue@gmail.com" , "Pedro@hotmail.com" , "Julia@outlook.com"
]

let dominios = emails.map(element => element.split("@")[1]);

console.log(dominios);
