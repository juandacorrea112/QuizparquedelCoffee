let numberPuntos = document.getElementById('number2')
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('lentDarkWinner').classList.toggle('lentDarkWinner')
        document.getElementById('lentDarkWinner').classList.toggle('lentDarkRemoveWinner')

    }, 1000);

    setTimeout(() => {
        document.getElementById('lentDarkWinner').classList.toggle('lentDarkRemoveWinner')
        document.getElementById('lentDarkWinner').classList.toggle('lentDarkWinner')
        document.getElementById('Felicidades').classList.toggle('Felicidades')
        document.getElementById('ganaste').classList.toggle('ganaste')
    }, 15000);

    setTimeout(() => {
        window.location.assign('/pages/index.html')
    }, 20000);
})



window.onload = function() {
        var valorAlmacenado = localStorage.getItem("miClave");
        const puntajeFinal = 'Su puntaje final es de:'
        numberPuntos.textContent = `${puntajeFinal} ${ valorAlmacenado} puntos`
}

