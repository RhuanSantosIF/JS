contagem = 1
contagem2 = 1
subcontagem = 1
subcontagem2 = 1
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
            subcontagem = contagem
            contagem++
        }
        else {
            if (contagem == 2) {
                criar.style.color = "green"
                subcontagem = contagem
                contagem++
            }
            else {
                if (contagem == 3) {
                    criar.style.color = "purple"
                    subcontagem = contagem2
                    contagem = 1
                }
                else {
                    criar.style.color = "blue"
                    contagem = 2
                    subcontagem = 1
                }

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
        if (contagem2 == 1) {
            criar.style.color = "blue"
            subcontagem2 = contagem2
            contagem2++
        }
        else {
            if (contagem2 == 2) {
                criar.style.color = "green"
                subcontagem2 = contagem2
                contagem2++
            }
            else {
                if (contagem2 == 3) {
                    criar.style.color = "purple"
                    subcontagem2 = contagem2
                    contagem2 = 1
                }
                else {
                    criar.style.color = "blue"
                    contagem = 2
                    subcontagem = 1
                }

            }
        }
    }
}
    function removerTextoUrgente() {
        var elemento = document.getElementById("lista-urgente").lastChild

        if (elemento) {
            elemento.remove()
            contagem2 = subcontagem2
            subcontagem2 = contagem2 - 1
        }
        else {
            alert("Não existe parágrafo para remover")
        }

    }
    function removerTextoNUrgente() {
        var elemento = document.getElementById("lista-nurgente").lastChild

        if (elemento) {
            elemento.remove()
            contagem = subcontagem
            if (contagem < 1) {
                contagem = 3
            }
            subcontagem= contagem-1
            contagem= contagem -1
        }
        else {
            alert("Não existe parágrafo para remover")
        }
    }
    function removerTudoUrgente() {
        var element = document.getElementsByClassName("notaUrgente");
        while (element.length > 0) {
            element[0].length.remove()
        }
        contagem2 = 1
        subcontagem2 = 1
    }
    function removerTudoNUrgente() {
        var element = document.getElementsByClassName("notaNUrgente");
        while (element.length > 0) {
            element[0].remove()
        }
        contagem = 1
        subcontagem = 1
    }

