var salarioFinal = 0;


function AdicionarSalario() {
    if (salarioFinal === 0) {
        var salario = parseFloat(document.getElementById("txt-Salario").value);
        if (salario === "" || salario === 0) {
            alert("Insira um valor válido para o salário.");
        }
        else {
            var criar = document.createElement("p");
            criar.innerText = document.getElementById("txt-Salario").value
            criar.id = "Salario-value"
            criar.className = "salario-value"
            document.getElementById("resumo-Salario").appendChild(criar);
            salarioFinal = salario;
            document.getElementById("txt-Salario").value = "";
        }
    }
    else {
        alert("Você já adicionou seu salário.");
    }
}

function AdicionarDespesas(){
    var despesa = [parseFloat(document.getElementById("txt-Despesas-nome").value)];
}