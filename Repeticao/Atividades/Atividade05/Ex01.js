var n,r
r=1
n=parseInt(prompt("Insira o primeiro termo: "))
r=parseInt(prompt("Insira a razão: "))
l=parseInt(prompt("Insira a quantidade de elementos da PA: "))
pa=n

for(var i=0;i<l;i++){
    document.write("<h3>"+pa+"<h3>")
    pa=pa+r
}
