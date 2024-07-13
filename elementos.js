///Criando uma variável para o elemento HTML que vamos inseir na página 

const h1 = document.createElement("h1");
// h1.textContent = "Estou criando meu primeiro elemento com JS!!!"

const container = document.querySelector("section");


container.append(h1)

//Criação de elementos "complexos"

let tituloCard2 = "Viajem para Alemanha"
let desCard2 = "Acompanhar a Eurocopa!"

const card = document.createElement("article");
card.classList.add("card")
const conteudo = ` <h2 class="titulo--card">${tituloCard2}</h2>
                   <p class="desc--card">${desCard2}</p>
                   <button class="btn--primario">Reserve</button>
                   <button class="btn-secundario">Saiba mais</button>`

card.innerHTML = conteudo;
container.append(card)

//----------------------------
// Criando elementos em Massa
// Array/Lista = Iterável
const tamArray = ["pp", "p", "g", "gg", "egg", "exgg"]

for (const item of tamArray) {
    const container = document.getElementById("tamanhos");
    console.log(container);

    const elTamanho = document.createElement("div");
    elTamanho.classList.add("seletor--tamanho")
    elTamanho.innerHTML = `<span class= "tamanho">${item}</span>`
    container.append(elTamanho)

}