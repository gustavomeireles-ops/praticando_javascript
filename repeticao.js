// NÍVEL BÁSICO

//* 1° Contagem de 1 a 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//* 2° Tabuada de um número 
let numero = Number(prompt("Escolha um número para mostrar a taboada do mesmo:"));

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

//* 3° Soma dos primeiros N números naturais
let n = Number(prompt("Digite o valor de N:"));
let soma = 0;

for (let i = 1; i <= n; i++) {
  soma += i;
}

console.log(`A soma de 1 até ${n} dá: ${soma}`);

// NÍVEL INTERMEDIÁRIO

//* 1° Exibir os números pares de 1 a 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//* 2° Jogo de advinhação
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let palpite = Number(prompt("Adivinhe o número secreto (entre 1 e 100):"));

while (palpite !== numeroSecreto) {
  if (palpite > numeroSecreto) {
    palpite = Number(prompt("O número correto é menor! Tente novamente:"));
  } else {
    palpite = Number(prompt("O número correto é maior! Tente novamente:"));
  }
}

console.log(`Parabéns! Você acertou o número ${numeroSecreto}.`);

//* 3° Contagem Regressiva
let inicio = Number(prompt("Digite um número para iniciar a contagem regressiva:"));

while (inicio >= 0) {
  console.log(inicio);
  inicio--;
}

//* 4° Validação de Senha
const senhaCorreta = "2302";
let senhaDigitada = prompt("Digite sua senha");

while (senhaDigitada !== senhaCorreta){
    senhaDigitada = prompt("Não Não Não, você não disse a palavra mágica ;)");
}

console.log("Acesso liberado! Bem vindo 00");

//* 5° Soma até parar 
let total = 0;
let valor = Number(prompt("Digite um número para somar (ou digite 0 pra parar):"));

while (valor !== 0) {
  total += valor;
  valor = Number(prompt("Digite outro número (ou digite 0 pra parar): "));
}

console.log(`A soma total acumulada é: ${total}`);

//* 6° Média de valores
let somaMedia = 0;
const quantidade = 3;

for (let i = 1; i <= quantidade; i++) {
  let numeroInserido = Number(prompt(`Digite o ${i}º número:`));
  somaMedia += numeroInserido;
}

let media = somaMedia / quantidade;
console.log(`A média dos ${quantidade} números é: ${media}`);

//AVANÇADO

//* 1° Soma dos dígitos de um número
let numero2 = Number(prompt("Digite um número inteiro positivo:"));
let soma2 = 0;

while (numero > 0) {
  soma += numero % 10; // Obtém o último dígito
  numero = Math.floor(numero / 10); // Remove o último dígito
}

console.log(`A soma dos dígitos é: ${soma}`);

//* 2° Tabuada Dinâmica
let numeroAlpha = Number(prompt("Digite um número para ver a tabuada:"));

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

//* 3° Inverter um número
let numeroTeta = Number(prompt("Digite um número inteiro:"));
let invertido = 0;

while (numero > 0) {
  let ultimoDigito = numero % 10;
  invertido = (invertido * 10) + ultimoDigito;
  numero = Math.floor(numero / 10);
}

console.log(`O número invertido é: ${invertido}`);

//* 4° Maior número digitado 
let maior;

for (let i = 1; i <= 5; i++) {
  let numero = Number(prompt(`Digite o ${i}º número:`));
  
  if (i === 1 || numero > maior) {
    maior = numero;
  }
}

console.log(`O maior número digitado foi: ${maior}`);

//* 5° Lista de nomes
let nomes = ["Diogo", "Ana", "Carlos", "Mariana"];

nomes.forEach(nome => {
  console.log(`Nome: ${nome}`);
});

//EXTRA

//* Sistemas de Pedidos
let produtos = [
  { id: 1, nome: "Teclado", preco: 50 },
  { id: 2, nome: "Mouse", preco: 30 },
  { id: 3, nome: "Monitor", preco: 500 }
];

// Exibe a lista de produtos utilizando forEach
console.log("--- Lista de Produtos ---");
produtos.forEach(produto => {
  console.log(`ID: ${produto.id} | Produto: ${produto.nome} | Preço: R$ ${produto.preco}`);
});

let produtoEscolhido = null;

// Repete a pergunta até encontrar um ID válido
while (!produtoEscolhido) {
  let idInput = Number(prompt("Digite o ID do produto que deseja escolher (1, 2 ou 3):"));
  
  // Utiliza o método find para localizar o produto selecionado
  produtoEscolhido = produtos.find(produto => produto.id === idInput);

  if (!produtoEscolhido) {
    console.log("Opção inválida! Escolha um ID que esteja na lista.");
  }
}

console.log(`Pedido realizado com sucesso! Você escolheu: ${produtoEscolhido.nome} por R$ ${produtoEscolhido.preco}.`);