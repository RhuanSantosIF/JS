var n1,n2,e,r

n1=parseFloat(prompt("Insira um numero: "))
n2=parseFloat(prompt("Insira um numero: "))
e=prompt("Qual equação: ")

if(e=="soma")
{
    r=n1+n2
    alert("O resultado da equção é: "+r)
}
if(e=="subtração")
{
    r=n1-n2
    alert("O resultado da equção é: "+r)
}

if(e=="multiplicação")
{
    r=n1*n2
    alert("O resultado da equção é: "+r)
}

if(e=="divisão")
{
    r=n1/n2
    alert("O resultado da equção é: "+r)
}


