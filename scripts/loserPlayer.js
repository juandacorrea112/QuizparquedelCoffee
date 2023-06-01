const container = document.querySelector('.contLoserP')

const rain = () => {
    let j = 0

    while (j <= 80) {
        let gout = document.createElement('i')
        let x = innerWidth * Math.random()
        let time = 1 * Math.random()

        setTimeout(() => {
            gout.style.animationDuration = time + 's'
            gout.style.left = x + 'px'
        }, 2300);
        
        setTimeout(() => {
            gout.style.visibility = "hidden"
        }, 20000);

        container.appendChild(gout)

        j++
    }
}

rain()