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