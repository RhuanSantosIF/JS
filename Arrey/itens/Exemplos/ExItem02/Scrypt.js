var a=[],i=0

do{
var r =prompt("Digite o nome de uma fruta: ")
a.push(r)
document.write("<h3>"+a[i]+"</h3>")
i++
q=parseInt(prompt("Deseja inserir mais frutas?(1=sim, 0=nâo)"))
}while(q==1)