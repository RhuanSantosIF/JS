function calcular(){
    alert("aidfuui")
    var alt,pes, r
    alt = document.getElementById("altura").value
    pes = document.getElementById("peso").value
    if (n1 == "" || n2 == "") {
        alert("Preencha os campos para realizar o calculo.")
    }
    else {
        r = parseFloat(pes)/(parseFloat(alt)*parseFloat(alt))
        if(r<18.5){
            document.getElementById("resultado").innerHTML = `Voce esta magro ${r}`
        }
    }    
}
