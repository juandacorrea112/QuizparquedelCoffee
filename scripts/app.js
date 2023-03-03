//IR AL QUIZ
// document.getElementById("ComenzarQ").addEventListener("click", () => {
//     document.getElementById("contBton").classList.toggle("contBtonGirar")
//     setTimeout(() => {
//         window.location.assign("/pages/quiz.html")
//     },3000)
// })


// Esconder las demas preguntas
window.addEventListener('load', () => {
    document.getElementById("card2").classList.toggle("card2Invisible")
    document.getElementById("card3").classList.toggle("card2Invisible")
    document.getElementById("card4").classList.toggle("card2Invisible")
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


// RESPUESTA INCORRECTA (A)
document.getElementById("opcionA2").addEventListener('click', () => {
    document.getElementById("opcionA2").style.background = "red"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box2").classList.add("card-boxClose")
        document.getElementById('card-contact2').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card2").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta3()
    }, 4500);
   
})

// RESPUESAT INCORRECTA (B)

document.getElementById("opcionB2").addEventListener('click', () => {
    document.getElementById("opcionB2").style.background = "red"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box2").classList.add("card-boxClose")
        document.getElementById('card-contact2').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card2").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta3()
    }, 4500);
   
})


// RESPUESAT CORRECTA (C)

document.getElementById("opcionC2").addEventListener('click', () => {
    document.getElementById("opcionC2").style.background = "rgb(0, 255, 0)"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box2").classList.add("card-boxClose")
        document.getElementById('card-contact2').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card2").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta3()
    }, 4500);
   
})


// PREGUNTA 3

function pregunta3() {
    // alert('oh yeah')
    document.getElementById("card3").classList.toggle("card2Invisible")
}

//FUNCIONALIDAD DE MOSTRAR OPCIONES

document.getElementById("cardBtn3").addEventListener("click", () => {
    document.getElementById("container").classList.toggle("change")
})



// RESPUESTA INCORRECTA (A)
document.getElementById("opcionA3").addEventListener('click', () => {
    document.getElementById("opcionA3").style.background = "red"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box3").classList.add("card-boxClose")
        document.getElementById('card-contact3').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card3").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta4()
    }, 4500);
   
})

// RESPUESAT INCORRECTA (B)

document.getElementById("opcionB3").addEventListener('click', () => {
    document.getElementById("opcionB3").style.background = "red"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box3").classList.add("card-boxClose")
        document.getElementById('card-contact3').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card3").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta4()
    }, 4500);
   
})


// RESPUESAT CORRECTA (C)

document.getElementById("opcionC3").addEventListener('click', () => {
    document.getElementById("opcionC3").style.background = "rgb(0, 255, 0)"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box3").classList.add("card-boxClose")
        document.getElementById('card-contact3').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card3").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta4()
    }, 4500);
   
})


// PREGUNTA 4

function pregunta4() {
    // alert('oh yeah')
    document.getElementById("card4").classList.toggle("card2Invisible")
}

//FUNCIONALIDAD DE MOSTRAR OPCIONES

document.getElementById("cardBtn4").addEventListener("click", () => {
    document.getElementById("container").classList.toggle("change")
})



// RESPUESTA INCORRECTA (A)
document.getElementById("opcionA4").addEventListener('click', () => {
    document.getElementById("opcionA4").style.background = "red"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box4").classList.add("card-boxClose")
        document.getElementById('card-contact4').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card4").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta4()
    }, 4500);
   
})

// RESPUESAT CORRECTA (B)

document.getElementById("opcionB4").addEventListener('click', () => {
    document.getElementById("opcionB4").style.background = "rgb(0, 255, 0)"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box4").classList.add("card-boxClose")
        document.getElementById('card-contact4').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card4").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta4()
    }, 4500);
   
})


// RESPUESAT INCORRECTA (C)

document.getElementById("opcionC4").addEventListener('click', () => {
    document.getElementById("opcionC4").style.background = "red"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box4").classList.add("card-boxClose")
        document.getElementById('card-contact4').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card4").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta4()
    }, 4500);
   
})