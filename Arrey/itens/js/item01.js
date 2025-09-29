var a = [6,5,8,3,7]

alert(a)/*Exibe todo o Array */

alert(a[2])/*eXIBE APENAS UMA POSIÇÃO*/

a[1]=4/*Altera uma elemento do array*/
alert(a)

/*percorrend o array usando laçode repetiçao*/ 
for(var i=0;i<5;i++){
    document.write("<h2>"+a[i]+"</h2>")
}