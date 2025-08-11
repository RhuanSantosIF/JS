var l,p,r

l=parseFloat(prompt("Insira a quantidade de litos abastecidos: "))
p=parseFloat(prompt("Perço atual da gasolina: "))

r=l*p

if(l<10 && l<15)
{
    r=r*0.9
    alert("Preço final: "+r)
}
if(l>15)
{
    r=r*0.8
    alert("Preço final: "+r)
}

