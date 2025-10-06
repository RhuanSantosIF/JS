var n,r
function valor(){
    n=parseFloat(prompt("Insira a temperatura em graus celcius: "))
    return(n)
}
function conversao(n){
    r=(n*(9/5))+32
    return(r)
}
function avisaaaaaaa(r){
    alert("A conversão para farenheint fica: "+r)
}
valor()
conversao(n)
avisaaaaaaa(r)