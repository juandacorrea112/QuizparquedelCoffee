let finalPoints = document.getElementById('number')

window.addEventListener('load', () => {

    const fetchData = async () => {
        const res = await fetch('/json/calificacion.json')
        const data = await res.json()
        plasmar(data)
        // return data
        console.log(data[0].calificacion);

    }
    fetchData()
})
function plasmar(data) {
    finalPoints.textContent = data[0].calificacion
}
