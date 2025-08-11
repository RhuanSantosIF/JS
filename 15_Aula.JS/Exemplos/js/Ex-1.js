var idade, nome

nome=prompt("Insira a sua idade: ")
idade=parseInt(prompt("Insira a sua idade: "))

alert("Bem vindo"+nome)

if(idade>=18)
{
    alert(nome+" Voce é maior de idade")
}
if(idade<18)
{
    alert(nome+" Voce não é maior de idade")
}