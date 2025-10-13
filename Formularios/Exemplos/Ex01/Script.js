var n1, n2
function somar() {
    var n1, n2, r
    n1 = document.getElementById("primeiro").value
    n2 = document.getElementById("segundo").value
    if (n1 == "" || n2 == "") {
        alert("Preencha os campos para realizar a soma.")
    }
    else {
        r = parseFloat(n1) + parseFloat(n2)
        document.getElementById("resultadoSoma").innerHTML = `O reusltado da soma é ${r}`
    }
}

function mult() {
    var n1, n2, r
    n1 = document.getElementById("primeiro").value
    n2 = document.getElementById("segundo").value
    if (n1 == "" || n2 == "") {
        alert("Preencha os campos para realizar a multiplicação.")
    }
    else {
        r = parseFloat(n1) * parseFloat(n2)
        document.getElementById("resultadoMult").innerHTML = `O reusltado da multiplicação é ${r}`
    }
}
function div() {
    var n1, n2, r
    n1 = document.getElementById("primeiro").value
    n2 = document.getElementById("segundo").value
    if (n1 == "" || n2 == "") {
        alert("Preencha os campos para realizar a multiplicação.")
    }
    else {
        n1=parseFloat(n1)
        n2=parseFloat(n2)
        if(n1==0 || n2==0){
            alert("Ambos os numeros devem ser diferentes de 0.")
        }
        else{
            r=n1/n2
            document.getElementById("resultadoMult").innerHTML = `O reusltado da multiplicação é ${r}`
        }   
    }
}

