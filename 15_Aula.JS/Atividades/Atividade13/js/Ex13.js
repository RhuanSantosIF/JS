var l,km,r

km=parseFloat(prompt("Insira a quantidade de km rodados: "))
l=parseFloat(prompt("Insira a quantidade de litros de gasolina usados: "))

r=km/l

if(r<8)
{
    alert("Venda o carro!")
}

if(r>8 && r<14)
{
    alert("Econômico!")
}
if(r>14)
{
    alert("Super economico")
}