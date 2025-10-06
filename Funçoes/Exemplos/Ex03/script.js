var n1,n2,n3

function dados(){
    n1=parseFloat(prompt("Insira a nota da prova: "))
    n2=parseFloat(prompt("Insira a nota do trabalho: "))
    n3=parseFloat(prompt("Insira a nota da lista: "))
    return(n1,n2,n3)
}
function media(n1,n2,n3)
{
    var m 
    m=((n1*0.7)+(n2*0.2)+(n3*0.1))
    alert(m)
    if(m>7){
        alert("Aprovado")
    }
    else{
        if(m<7 && m>3.9){
            alert("Esta de exame")
        }
        else{
            alert("Reprovado")
        }
    }
}
dados()
media(n1,n2,n3)