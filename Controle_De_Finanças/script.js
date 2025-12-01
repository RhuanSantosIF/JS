var salarioFinal = localStorage.getItem("salario")


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
            localStorage.setItem("salario", salarioFinal);
        }
    }
    else {
        alert("Você já adicionou seu salário.");
    }
}

function AdicionarDespesas(){
    var despesa = [document.getElementById("txt-Despesas-nome").value,parseFloat(document.getElementById("txt-Despesas-valor").value),document.getElementById("txt-Despesas-data").value];
    if(despesa[0]==="" || despesa[1]==="" || despesa[1]===0 || despesa[2]===""){
        alert("Por favor, preencha todos os campos de despesa com valores válidos.");
    }
}