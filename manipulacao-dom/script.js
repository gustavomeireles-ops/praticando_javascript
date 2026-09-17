const elementos = document.querySelectorAll(".texto")

// percebendo a lista e imprimindo cada um dos elementos
elementos.forEach(elemento => console.log("elemento"));

// percebendo a lista e pegndo o texto do elementos (innerText)
elementos.forEach(elemento => console.log(elemento.innerText));

// alterando textos
elementos.forEach(elemento => {
    elemento.innerText = "Alterado";

    // elemento.textContent = "Alterado;" // vem com a formatação do elemento
});

// trocando as tags - innerHTML
elementos.forEach(elemento => {
    elemento.innerHTML = "<h2>item</h2>";
});

// trocar a cor do elemento
elementos.forEach(elemento => {
    elemento.style.color = "0000FF"; 
});

//* EVENTOS COM JS
//* o que são eventos? R: Ações do usuário

// Evento de click
const botao = document.getElementById("btn");

botao.addEventListener("click", () => {
    alert("Você clicou! ;)");
});

// Evento de digitação (input/ keyup)
const campo = document.getElementById("campo");
const resultado = document.getElementById("resultado");

// INPUT
// evento input -> dispara sempre que digita, em tempo real
// campo.addEventListener("input", () => {
//     resultado.innerText = campo.value // value equivale ao que está sendo digitado dentro do campo
// })

// KEYUP
// só dispara quando soltar a tecla
// campo.addEventListener("keyup", () => {
//     resultado.innerText = campo.value // value equivale ao que está sendo digitado dentro do campo
// })

// Evento de mouse
const elemento = document.getElementById("troca-cor");

// mouseover -> quando o mouse passa em cima do elemento
elemento.addEventListener("mouseover", () => {
    elemento.style.backgroundColor = "#FF0000";
}) 

// mouseout -> quando o mouse sai de cima do elemento
elemento.addEventListener("mouseout", () => {
    elemento.style.backgroundColor = "#0000FF";
}) 

// mousemove
// pega a posição do mouse
document.addEventListener("mousemove", (evento) => {
    console.log(`Posição X: ${evento.clientX}, Posição Y: ${evento.clientY}`);
})

// EVENTO DE FORMULÁRIO (submit)

const form = document.querySelector("form") // pega direto pela tag form

// o comportamento padrão de formulário é recarregar a página ao enviar o submit
form.addEventListener ("submit" , (e) => {
    e.preventDefault();// preventDefault desabilita esse comportamento padrão

    const nome = document.getElementById("nome").value
    console.log(`Nome: ${nome}`);
    
})
