/**Uso de variaveis em JS 
 * Não é nescessario 
 */
var frase
frase = "Aqui temos a variavel frase!"
alert(frase)
var nome
nome = prompt("Digite o seu nome:")
alert("Bem vindo " + nome)
var idade
idade = prompt("Digite a sua idade:")
alert("Sua idade é " + idade)

/**Operaçãoes aritmetricas com JS  */
var n1,n2,r

n1=3
n2=5
r=n1+n2
alert("O resultado da soma entre "+n1+" e "+n2+" é "+r)

/*Operação com valores digitados pelo usuario */
n1=parseInt(prompt("Digite um numero:"))
n2=parseint(prompt("Digite outro numero:"))
r=n1+n2

alert("O resultado da soma entre os dois numeros digitados é "+r)

/*ealize a divisão de dois numeros digitados pelo usuarioe apresente o resultado*/ 

var n1,n2,r
n1=parseFloat(prompt("Digite um numero:"))
n2=parseFloat(prompt("Digite outro numero:"))
r=n1/n2
alert("O resultado da divisão entre os dois numeros digitados é "+r)
