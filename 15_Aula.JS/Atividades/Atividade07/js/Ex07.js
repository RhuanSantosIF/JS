var n1,n2,r

n1=parseFloat(prompt("Insira um numero: "))
n2=parseFloat(prompt("Insira um numero: "))

r=n1+n2

if(r>20)
{
    r=r+8
    alert("A sua soma mais 8 é: "+r)
}
else{
if(r<=20)
{
    r=r-5
    alert("A sua soma menos 5 é: "+r)
}
}