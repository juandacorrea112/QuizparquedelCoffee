// let finalPoints = document.getElementById('number')

// window.addEventListener('load', () => {

//     const fetchData = async () => {
//         const res = await fetch('/json/calificacion.json')
//         const data = await res.json()
//         plasmar(data)
//         // return data
//         console.log(data[0].calificacion);

//     }
//     fetchData()
// })
// function plasmar(data) {
//     finalPoints.textContent = data[0].calificacion
// }

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