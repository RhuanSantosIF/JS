var n

n = parseInt(prompt("Insira um numero: "))

if (n <= 3) {
    n = n * 2
    alert("O seu dobro é:" + n)
}

else {
    if (n > 3) {
        n = n * 3
        alert("O seu triplo é:" + n)
    }

}