var lista=["Gervronilson",12,"Estrada A","Linha C",18.5,1800, true]

alert(lista)

for(var i=0;i<lista.length;i++){
    document.write("<h2>"+lista[i]+"</h2>")
}

/*Adiciomar elementos ao fim da lista*/
lista.push("84500-000")
alert(lista)

/*Remover o ultimo elementos*/
lista.pop()
alert(lista)

/*Remover o primeiro elemento da lista*/
lista.shift()
alert(lista)

/*Adicionar o elemento na primeira posição da lista*/
lista.unshift("Gervronildo")
