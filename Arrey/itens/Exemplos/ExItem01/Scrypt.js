var a=[], n=0, q=0
alert("Podem ser registrados até 10 produtos.")
for(var i=0; i<10 && n==0;i++){
    a[i]=parseInt(prompt("Insira o valor do produto:"))
    n=parseInt(prompt("Deseja registrar mais itens?(0=sim e 1=Não)"))
    q++
}
document.write("<h1>Valores Registrados</h1>")
for(var i=0;i!=n;i++){
    document.write("<h3>"+a[i]+"</h3>")
}
document.write("<h1>Quantidade</h1>")
document.write("<h3>Quantidade</h3>")