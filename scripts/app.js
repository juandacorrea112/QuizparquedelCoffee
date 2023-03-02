//IR AL QUIZ
// document.getElementById("ComenzarQ").addEventListener("click", () => {
//     document.getElementById("contBton").classList.toggle("contBtonGirar")
//     setTimeout(() => {
//         window.location.assign("/pages/quiz.html")
//     },3000)
// })

window.addEventListener('load', () => {
    document.getElementById("card2").classList.toggle("card2Invisible")
})


//FUNCIONALIDAD DE MOSTRAR LAS OPCIONES
document.getElementById("cardBtn").addEventListener("click", () => {
    document.getElementById("container").classList.toggle("change")
})

//SELECCIONAR UNA OPCION PARA RESPONDER (PREGUNTA 1)

// RESPUESTA CORRECTA (A)
document.getElementById("opcionA").addEventListener('click', () => {
    document.getElementById("opcionA").style.background = "rgb(0, 255, 0)"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box").classList.add("card-boxClose")
        document.getElementById('card-contact').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta2()
    }, 4500);
   
})

// RESPUESAT INCORRECTA (B)

document.getElementById("opcionB").addEventListener('click', () => {
    document.getElementById("opcionB").style.background = "red"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box").classList.add("card-boxClose")
        document.getElementById('card-contact').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta2()
    }, 4500);
   
})


// RESPUESAT INCORRECTA (C)

document.getElementById("opcionC").addEventListener('click', () => {
    document.getElementById("opcionC").style.background = "red"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box").classList.add("card-boxClose")
        document.getElementById('card-contact').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta2()
    }, 4500);
   
})



// PREGUNTA 2

function pregunta2() {
    // alert('oh yeah')
    document.getElementById("card2").classList.toggle("card2Invisible")
}


//FUNCIONALIDAD DE MOSTRAR LAS OPCIONES

document.getElementById("cardBtn2").addEventListener("click", () => {
    document.getElementById("container").classList.toggle("change")
})