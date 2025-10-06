
/*função sem retorno */

function somar(){
    var n1, n2, r 
    n1=3
    n2=4

    r=n1+n2

    alert("O resultado da soma é: "+r)
}
somar()

/*Funçãp copm parametro*/ 

function subtrair(n1,n2){
    var r

    r=n1-n2

    alert("O resultadoo da subtração é; "+r)
}
subtrair(8,3)

/*Função com parametro e com retorno */

function multiplicacao(n1,n2){
    var r
    
    r=n1*n2

    return(r)
}
var resultado=multiplicacao(9,5)
alert("O resultado da multiplicação é; "+resultado)
