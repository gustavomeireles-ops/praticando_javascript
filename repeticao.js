// NÍVEL BÁSICO

//* 1° Contagem de 1 a 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//* 2° Tabuada de um número

const numero_taboada = 2;

for (let i = 1; i <= 10; i++) {
  console.log(`${numero_taboada} x ${i} = ${numero_taboada * i}`);
}

//* 3° Soma dos primeiros N números naturais

const numeroN = 6;
let soma = 0;

for (let i = 1; i <= N; i++) {
  soma += i;
}

console.log(`O resultado é da soma dos primeiros números até N dá: ${soma}`);

// --- NÍVEL INTERMEDIÁRIO ---

//* 1° Exibir números pares de 1 a 50

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

