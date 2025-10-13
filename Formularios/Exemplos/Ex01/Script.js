function somar() {
    var n1, n2, r
    n1 = document.getElementById("primeiro").value
    n2 = document.getElementById("segundo").value
    if (n1=="" || n2=="") {
        alert("Preencha os campos para realizar a soma.")
    }
    else {
        r = parseFloat(n1) + parseFloat(n2)
        document.getElementById("resultado").innerHTML = `O reusltado da soma é ${r}`
    }
}
