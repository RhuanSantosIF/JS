var salarioFinal = parseFloat(localStorage.getItem("salario")) || 0;


function carregarSalario() {
    if (salarioFinal && !isNaN(salarioFinal) && salarioFinal > 0) {///verefica s e e valido
        var criar = document.createElement("p");
        criar.innerText = salarioFinal;
        criar.id = "Salario-value";
        criar.className = "salario-value";
        var resumoElement = document.getElementById("lista-Salario");
        if (resumoElement) {
            resumoElement.innerHTML = "";
            resumoElement.appendChild(criar);
        }
    }
}

window.addEventListener("load", carregarSalario);///re faz o salario ao carregar a pagina

function AdicionarSalario() {
    if (salarioFinal === 0 || salarioFinal === null || isNaN(salarioFinal)) {
        var salario = parseFloat(document.getElementById("txt-Salario").value);
        if (salario === "" || salario === 0) {
            alert("Insira um valor válido para o salário.");
        }
        else {
            salarioFinal = salario;
            document.getElementById("txt-Salario").value = "";
            localStorage.setItem("salario", salarioFinal);///seta no local storage
        }
    }
    else {
        alert("Você já adicionou um salário. Remova o anterior para adicionar um novo.");
    }

    if (salarioFinal && !isNaN(salarioFinal) && salarioFinal > 0) {//verefica se e valido
        var criar = document.createElement("p");
        criar.innerText = salarioFinal;
        criar.id = "Salario-value";
        criar.className = "salario-value";
        var resumoElement = document.getElementById("lista-Salario");
        if (resumoElement) {
            resumoElement.innerHTML = "";
            resumoElement.appendChild(criar);
        }
    }
}

function removerSalario() {
    salarioFinal = 0;
    localStorage.removeItem("salario");
    var resumoElement = document.getElementById("lista-Salario");
    if (resumoElement) {
        resumoElement.innerHTML = "";
    }
    alert("Salário removido com sucesso!");
}

function AdicionarDespesas() {
    var nome = document.getElementById("txt-Despesas-nome").value;
    var valor = parseFloat(document.getElementById("txt-Despesas-valor").value);//pega osvalores
    var data = document.getElementById("txt-Despesas-data").value;

    if (nome === "" || valor === "" || valor === 0 || data === "") {
        alert("Por favor, preencha todos os campos de despesa com valores válidos.");
    }
    else {

        var despesas = JSON.parse(localStorage.getItem("despesas")) || [];

        despesas.push({
            nome: nome,
            valor: valor,//definição dos valores
            data: data
        });


        localStorage.setItem("despesas", JSON.stringify(despesas));//seta as despesas no local storage (JSON formata os dados)


        document.getElementById("txt-Despesas-nome").value = "";
        document.getElementById("txt-Despesas-valor").value = "";//deixa bunito
        document.getElementById("txt-Despesas-data").value = "";

        alert("Despesa adicionada com sucesso!");

        carregarDespesas();
    }
}

function carregarDespesas() {
    var despesas = JSON.parse(localStorage.getItem("despesas")) || [];//pega as despesas do local storage (JSON formata os dados)
    var listaDespesas = document.getElementById("lista-Despesas");
    var listaResumoDespesas = document.getElementById("lista-Despesas-Resumo");


    listaDespesas.innerHTML = "";
    listaResumoDespesas.innerHTML = "";

    var totalDespesas = 0;


    despesas.forEach(function (despesa, index) {

        var li = document.createElement("li");
        li.innerText = despesa.nome + " - R$ " + despesa.valor + " (" + despesa.data + ")";//despesas da lista
        listaDespesas.appendChild(li);


        var li2 = document.createElement("li");
        li2.innerText = despesa.nome + " - R$ " + despesa.valor + " (" + despesa.data + ")";//despesas do resumo
        listaResumoDespesas.appendChild(li2);

        totalDespesas = totalDespesas + despesa.valor;
    });


    var pTotal = document.createElement("p");
    pTotal.innerText = "Total: R$ " + totalDespesas.toFixed(2);
    pTotal.id = "total-despesas";
    pTotal.className = "total-despesas";
    listaResumoDespesas.appendChild(pTotal);
    
    // Calcular e exibir o saldo final
    calcularSaldoFinal(totalDespesas);
}

function calcularSaldoFinal(totalDespesas) {
    var saldoFinal = salarioFinal - totalDespesas;
    var resumoSaldo = document.getElementById("resumo-Saldo");
    
    if (resumoSaldo) {
        resumoSaldo.innerHTML = "<h3>Saldo Final R$:</h3>";
        
        var pSaldo = document.createElement("p");
        pSaldo.innerText = saldoFinal.toFixed(2);
        pSaldo.id = "saldo-final";
        pSaldo.className = "saldo-final";
        
        if (saldoFinal < 0) {///muda a corzinha
            pSaldo.style.color = "red";
        } else if (saldoFinal > 0) {
            pSaldo.style.color = "green";
        } else {
            pSaldo.style.color = "black";
        }
        
        resumoSaldo.appendChild(pSaldo);
    }
}

function removerUltimaDespesa() {
    var despesas = JSON.parse(localStorage.getItem("despesas")) || [];//pega as despesas do local storage (JSON formata os dados)

    if (despesas.length === 0) {///vese tem despesas pra remover length por que é um array
        alert("Não há despesas para remover.");
    }
    else {
        despesas.pop();//remove a ultima despesa
        localStorage.setItem("despesas", JSON.stringify(despesas));//atualia o local storage (JSON formata os dados)
        alert("Última despesa removida com sucesso!");
        carregarDespesas();
    }
}

window.addEventListener("load", function () {//recarrega os dados ao carregar a pagina
    carregarSalario();
    carregarDespesas();
});

