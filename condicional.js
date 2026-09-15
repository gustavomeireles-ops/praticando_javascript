// --- NÍVEL BÁSICO ---

//* 1° Verificar maioridade:
 let idade = 16;
 
 if (idade >= 18) {
    console.log("Você é maior de idade");
 }
 
 else if (idade < 18) {
    console.log("Você é menor de idade");
 }

 //* 2° Verificar se um número é positivo ou negativo:
 let numero_escolhido = 19;

 if (numero_escolhido <= 0) {
    console.log("O número é negativo");
 } 

 else if (numero_escolhido > 0) {
    console.log("O número é positivo");
 }

 //* 3° Aprovação em prova 
 let nota_prova = 55;

 if (nota_prova >= 60) {
    console.log("Aprovado!");
 }

 else if (nota_prova < 60) {
    console.log("Reprovado!");
 }

 //* 4° Verificar se é (+), (-) ou 0
 let numero_ = 90;
 
 if (numero_ > 0) {
    console.log ("O número é positivo!")
 }

 else if (numero <= 0) {
    console.log ("O número é negativo")
    console.log ("O número é 0")
 }

 //* 5° Classificação de idade 
 let idade_ = 16;

 if (idade_ <= 12) {
    console.log ("Você é criança");
 } else if (idade_ < 18) {
    console.log ("Você é adolescente")
 } else if (idade_ > 18) {
    console.log("Você é adulto");
 }

 //* 6° Verificação de par ou ímpar

 let numero_random = 50;

 if (numero_random %2 == 0) {
    console.log ("O número é par");
 } else {
    console.log ("O número é ímpar");
 }

 // --- NÍVEL INTERMEDIÁRIO ---

 //* 1° Calculadora

 let numero1 = 20;
 let numero2 = 4;
 let operacao = "+"; // pode ser +, -, * ou /

 if (operacao === "+") {
    console.log (`Resultado: ${numero1 + numero2}`);
 } else if (operacao === "-") {
    console.log (`Resultado: ${numero1 - numero2}`);
} else if (operacao === "*") {
    console.log (`Resultado: ${numero1 * numero2}`);
} else if (operacao === "/") {
    if (num2 !== 0) {
        console.log (`Resultado: ${numero1 / numero2}`);
    } else {
        console.log ("Erro: Divisão por zero não é permitida.");
    }
} else {
    console.log("Operação inválida!");
}

//* 2° Maior entre 3 números

let num1 = 1;
let num2 = 2;
let num3 = 3;

if (num1 > num2 && num1 > num3) {
    console.log ("O número 1 é o maior entre os 3")
} else if (num2 > num1 && num2 > num3) {
    console.log ("O número 2 é o maior entre os 3")
} else if (num3 > num2 && num3 > num1) {
    console.log ("O número 3 é o maior entre os 3")
}

//* 3° Desconto em compras

let valor_compra = 150;

if (valor_compra) {
    let valor_final = valor_compra * 0.90;
    console.log (`Desconto de 10% aplicado! Valor final: R$: ${valor_final.toFixed(2)}`);
} else {
    console.log (`Sem desconto. Valor total: R$ ${valor_compra.toFixed(2)}`);
}

//* 4° Sistema de login simples

let usuario = "admin";
let senha = 1234;

if (usuario == "admin" && senha == 1234) {
    console.log ("Login bem-sucedido!");
} else {
    console.log ("Acesso negado!");
}

// --- NÍVEL AVANÇADO ---

//* 1° Frete de pedido

let valor_da_compra = 225;

if (valor_da_compra >= 100) {
    console.log (`Frete Grátis. Valor final: R$ ${valor_da_compra}`);
} else if (valor_da_compra == 50) {
    console.log (`Frete de 10 reais aplicado. Valor final: R$ ${valor_da_compra - 10}`);
} else if (valor_da_compra !== 100 && 50) {
    console.log (`Frete de 20 reais aplicado. Valor final: R$ ${valor_da_compra - 20}`);
}

//* 2° Acesso por idade e convite

let idade_do_convidado = 17;
let tem_convite = sim;

if (idade >= 18 || tem_convite == sim) {
    console.log("Pode entrar, seja bem-vindo(a) a minha festa!");
} else {
    console.log("Barrado, você não é maior de idade ou não tem convite");
}

//* 3° Conversão de notas para conceitos

let nota = 96;

if (nota >= 90) {
    console.log("Conceito A");
} else if (nota >= 80) {
    console.log("Conceito B");
} else if (nota >= 70) {
    console.log("Conceito C");
} else if (nota >= 60) {
    console.log("Conceito D");
} else {
    console.log("Reprovado!");
}

//* 4° Cálculo de IMC

let peso = 87;
let altura = 189;

let IMC = peso / altura^2;

if (IMC <= 18,5) {
    console.log("Seu IMC: Magreza");
} else if (IMC <= 24,9) {
    console.log("Seu IMC: Peso Normal");
} else if (IMC <= 29,9) {
    console.log("Seu IMC: Sobrepeso"); 
} else if (IMC <= 39,9) {
    console.log("Seu IMC: Obesidade");
} else if (IMC <= 40,0) {
    console.log("Seu IMC: Obesidade Grave");
}

//* Verificação de disponibilidade

let estoque = 12;

if (estoque >= 10) {
    console.log("Produto disponível");
} else if (estoque < 10) {
    console.log("Últimas unidades");
} else if (estoque == 0) {
    console.log("Esgotado");
}
