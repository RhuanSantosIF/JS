var p,e

p = parseFloat(prompt("Insira o preço do produto: "))
e = prompt("Insira o estado(MG,SP,RJ,MS): ")

if (e=="MG" || e=="SP" || e=="RJ" || e=="MS") 
{
    if (e=="MG") 
    {
        p=p*1.07
        alert("O valor do produto é:"+p)
    }
    if (e=="SP") 
    {
        p=p*1.12
        alert("O valor do produto é:"+p)
    }
    if (e=="RJ") 
    {
        p=p*1.15
        alert("O valor do produto é:"+p)
    }
    if (e=="MS") 
    {
        p=p*1.08
        alert("O valor do produto é:"+p)
    }
}
else{
    alert("Estado não encontrado.")
}