var n,i,t

i=0
n=parseInt(prompt("Digite a trabuada desejada:"))

while(i<11)
{
    t=n*i
    document.write("<h2>"+n+" X "+i+" = "+t+"<h2>")
    i++
}