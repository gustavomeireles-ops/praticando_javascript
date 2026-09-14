// let nome = "Diogo";
// let idade = 30;

// // CONCATENAÇÃO
// console.log("Nome: " + nome + ", idade: " + idade);

// // INTERPOLAÇÃO
// console.log(`Nome: ${nome}, idade: ${idade}`);

// console.log(typeof nome);
// console.log(typeof idade);


// let soma = "5" + 3; // 53
// let sub = "5" - 3; // 2

// console.log(soma);
// console.log(sub);

// console.log(typeof soma);
// console.log(typeof sub);

// convertendo valores
// let numero = "ab" // string

// let convertido = Number(numero) // converte o valor para number

// console.log(typeof convertido);


// OPERADORES RELACIONAIS

// VALIDA IGUALDADE DE VALOR (SOMENTE VALOR)
// "10" == 10 -> true

// VALIDO IGUALDADE DE VALOR E TIPO DE DADO
// "10" === 10 -> false


// &&
// ||
// !

// let opcao = 2

// switch(opcao) {
//     case 1:
//         hgdhasghd
//         break;
//     case 2:
// }


// ESTRUTURA DE REPETIÇÃO
// let frutas = ["Maçã", "Banana", "Acerola", "Uva"];

// console.log(frutas);

// frutas.forEach(function(fruta) {
//     console.log(`Fruta: ${fruta}`);
// })

// frutas.forEach(fruta => console.log(`Fruta: ${fruta}`));


// FUNÇÕES NATIVAS JS

// FUNÇÃO MAP()
// Percorre uma lista e cria uma nova lista com base em uma condição

// let numeros = [1, 2, 3, 4]

// let numerosDobrados = numeros.map(function(num) {
//     return num * 2
// })

// numerosDobrados = [2, 4, 6, 8]
// console.log(numerosDobrados);

// ou assim:
// Arrow function com retorno implícito

// let numerosDobradosArrow = numeros.map(num => num * 2); 

// FILTER
// Filtra os elementos com bas em uma condição

// let numeros = [5, 10, 15, 20];

// let maioresQueDez = numeros.filter(num => num > 10);

// maioresQueDez = [15, 20]
// console.log(maioresQueDez);

// REDUCE
// Reduz o valores de um array para um único valor

// let numeros = [1, 2, 3, 4]

// // acumulador inicia em 0
// // variavel auxiliar
// // acumulador começa em 0 e soma com o auxili até  último valor do array

// let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);

// ac 0
// ac 1
// ac 3
// ac 6
// ac 10

// console.log(soma);

// FIND
// Retorna o 1° elemento que atende a condição 

// let produtos = {
//     { id: 1, nome: "Teclado", preço: 50 }, //produto
//     { id: 2, nome: "Mouse", preço: 30 }

// }

// let item = produtos.find(produto => produto.id === 2)

// console.log(item);

