var bma,bme,alt,a

bma=parseFloat(prompt("Insira a base maior do trapezio: "))
bme=parseFloat(prompt("Insira a base menor do trapezio: "))
alt=parseFloat(prompt("Insira a altura do trapezio: "))

if(bma>0 && bme>0)
{
    a=(bma+bme)*alt/2
    alert("A area do trapezio é: "+a)
}

if(bma<=0 || bme<=0)
{
    alert("As bases devem ser maiores que 0")
}