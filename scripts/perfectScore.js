let gravedad = .3
let numHijos = 10

function start() {
    let particulas = document.getElementsByClassName('particulas')

    for (let i = 0; i < particulas.length; i++) {
        let particula = particulas[i]

  

        let y = window.innerHeight
        let x = window.innerWidth /2

        particula.style.top = y + "px"
        particula.style.left = x + "px"

        particula.setAttribute("data-velocidad", "-20")
        particula.style.background = getRandomColor()
    }
}

function update() {
    let particulas = document.getElementsByClassName('particulas')

    for (let i = 0; i < particulas.length; i++) {
        let particula = particulas[i]

        let velocidad = parseFloat(particula.getAttribute('data-velocidad'))
        velocidad += gravedad

        particula.setAttribute('data-velocidad', velocidad)
        
        let top = particula.style.top ? particula.style.top : "0";

        top = parseFloat(top.replace("px", ""))

        top += velocidad

        particula.style.top = top + "px"

        if(velocidad >= 0) {
            explotar(particula)
        }
    }
    setTimeout(update, 20)
}

function explotar(particula) {
    for (let p = 0; p < numHijos.length; p++) {
        var hijo = document.createElement('div')
        hijo.className = "particula"

        hijo.style.top = particula.style.top
        hijo.style.left = particula.style.left

        //agregar hijo
        document.getElementsByTagName('body')[0].append(hijo)

        
    }
    particula.remove()
}

window.onload = function () {
    start()
    update()
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}