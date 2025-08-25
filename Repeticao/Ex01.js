var cont 
cont=0

while(cont<10){
    alert("Irritando o usuario com while "+cont+" vezes.")
    cont++    
}

for(cont=0;cont<10;cont++){
    alert("Irritando o usuario com for "+cont+" vezes.")
}

var resposta 
do{
    resposta=confirm("Deseja Continuar?")
}while(resposta==true)