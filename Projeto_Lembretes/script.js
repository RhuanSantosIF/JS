var contagem = 1
var contagem2 = 1
var cor1, cor2
function adicionar() {
    var texto = document.getElementById("textoInicial").value;
    var checkbox = document.getElementById("checkbox").checked;

    if (checkbox == false) {
        var criar = document.createElement("li");
        criar.innerText = texto
        criar.id = "notaNUrgente"
        criar.className = "notaNUrgente"
        var container = document.getElementById("lista-nurgente");
        container.appendChild(criar);
        if (contagem === 1) {
            cor = "blue"
            contagem++
        }
        else {
            if (contagem === 2) {
                cor = "green"
                contagem++
            }
            else {
                if (contagem === 3) {
                    cor = "purple"
                    contagem = 1
                }
            }
        }
        criar.style.color=cor
    }
    else {
        var criar = document.createElement("li");
        criar.innerText = texto
        criar.id = "notaUrgente"
        criar.className = "notaUrgente"
        var container = document.getElementById("lista-urgente");
        container.appendChild(criar);
        if (contagem2 == 1) {
            cor2 = "blue"
            contagem2++
        }
        else {
            if (contagem2 == 2) {
                cor2 = "green"
                contagem2++
            }
            else {
                if (contagem2 == 3) {
                    cor2 = "purple"
                    contagem2 = 1
                }
            }
        }
        criar.style.color=cor2
    }
}
function removerTextoUrgente() {
    var elemento = document.getElementById("lista-urgente").lastChild

    if (elemento) {
        cor2 = document.getElementById("lista-urgente").lastChild.style.color
        if(cor2 === "blue"){
            contagem2=1
        }
        else{
            if(cor2 ==="green"){
                contagem2=2
            }
            else{
                if(cor2 ==="purple"){
                    contagem2=3
                }
            }
        } 
        elemento.remove()
    }
    else {
        alert("Não existe parágrafo para remover")
    }

}
function removerTextoNUrgente() {
    var elemento = document.getElementById("lista-nurgente").lastChild

    if (elemento) {
        cor1 = document.getElementById("lista-nurgente").lastChild.style.color
        if(cor1 === "blue"){
            contagem=1
        }
        else{
            if(cor1 ==="green"){
                contagem=2
            }
            else{
                if(cor1 ==="purple"){
                    contagem=3
                }
            }
        }      
        elemento.remove()
    }
    else {
        alert("Não existe parágrafo para remover")
    }
}
function removerTudoUrgente() {
    var element = document.getElementsByClassName("notaUrgente");
    while (element.length > 0) {
        element[0].remove()
    }
    contagem2 = 1
}
function removerTudoNUrgente() {
    var element = document.getElementsByClassName("notaNUrgente");
    while (element.length > 0) {
        element[0].remove()
    }
    contagem = 1
}

