var r,n1,n2,n3
function ler()
{
    n1=parseInt(prompt("Defina o valor 1; "))
    n2=parseInt(prompt("Defina o valor 2; "))
    n3=parseInt(prompt("Defina o valor 3; "))
    return(n1,n2,n3)
}
function mult(n1,n2,n3)
{
    r=n1*n2*n3
    return(r)
}
function exibi(){
    alert("Resultado: "+r)
}
ler()
mult(n1,n2,n3)
exibi()

