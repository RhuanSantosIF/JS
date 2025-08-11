var n1,n2,n3,n4,r

n1=parseFloat(prompt("Insira a nota: "))
n2=parseFloat(prompt("Insira a nota: "))
n3=parseFloat(prompt("Insira a nota: "))
n4=parseFloat(prompt("Insira a nota: "))

r=(n1+n2+n3+n4)/4

if(r>=7)
{
    alert("Aprovado.")
}
if(r<7)
{
    alert("Reprovado.")
}
