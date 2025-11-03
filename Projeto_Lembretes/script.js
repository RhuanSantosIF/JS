contagem = 1
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
        if (contagem == 1) {
            criar.style.color = "blue"
            contagem++
        }
        else {
            if (contagem == 2) {
                criar.style.color = "green"
                contagem++
            }
            else {
                criar.style.color = "purple"
                contagem = 1
            }
        }
    }
    else {
        var criar = document.createElement("li");
        criar.innerText = texto
        criar.id = "notaUrgente"
        criar.className = "notaUrgente"
        var container = document.getElementById("lista-urgente");
        container.appendChild(criar);
        if (contagem == 1) {
            criar.style.color = "blue"
            contagem++
        }
        else {
            if (contagem == 2) {
                criar.style.color = "green"
                contagem++
            }
            else {
                criar.style.color = "purple"
                contagem = 1
            }
        }
    }
}
function removerTextoUrgente() {
    var elemento = document.getElementById("notaUrgente");

    if (elemento) {
        elemento.remove();
    }
    else {
        alert("Não existe parágrafo para remover")
    }

}
function removerTextoNUrgente() {
    var elemento = document.getElementById("notaNUrgente");

    if (elemento) {
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
}
function removerTudoNUrgente() {
    var element = document.getElementsByClassName("notaNUrgente");
    while (element.length > 0) {
        element[0].remove()
    }
}

