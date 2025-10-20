/* Exemplo 01 get element by id */
var titulo = document.getElementById("titulo");
//alert(titulo)
console.log(titulo)

/* Exemplo 02 innerHTML */
function mudarTitulo() {
    var elemento = document.getElementById("titulo");
    elemento.innerHTML = "Manipulando itulo com JS";
    var elemento02 = document.getElementById("titulo02");
    elemento02.innerHTML = "Manipulando titulo 02 com JS";
}
/* Exemplo 03 mudar estilo */
function mudarEstilo() {    
    var elemento = document.getElementById("titulo");
    elemento.style.color = "red";
    elemento.style.backgroundColor = "yellow";
    elemento.style.border = "2px solid blue";
    elemento.style.fontSize = "24px";
}

/* Exemplo 04 classList.add */

function destacar() {
    var elemento = document.getElementById("titulo02");
    elemento.classList.add("destaque");
}

/* Exemplo 05 classList.remove */

function remover() {
    var elemento = document.getElementById("titulo02");
    elemento.classList.remove("destaque");
}

/* Exemplo 06 alterar atributos */

function alternar() {
    var elemento = document.getElementById("titulo02");
    elemento.classList.toggle("destaque");
}

/* Exemplo 07 adicionar texto */

function adicionarTexto() {
    /* Crria uma elemento p*/
    var novo=document.createElement("p");
    novo.innerText="Novo paragrafo criado com JS"
    novo.id="paragrafo"

    /*Depois de criar um elemento vamos colocá-lo dentro da div*/
    var container = document.getElementById("container");
    container.appendChild(novo);
}

/* Exemplo 08 remover elemento */

function removerTexto() {
    var elemento = document.getElementById("paragrafo");
    // teste para remover se somente tiver paragrafo
    if (elemento) {
        elemento.remove();
    }
    else{
        alert("Não existe parágrafo para remover")
    }
    
}

/* Exemplo 09 Remover tudo */

function removerTudo() {
    var element = document.getElementById("container");
    element.remove();
}

/* Exemplo 10 Modificar atributos */

function colorir() {
    var intens = document.querySelectorAll("p")
    for(var i=0; i<intens.length; i++){
        intens[i].style.color="purple"
    }
}
