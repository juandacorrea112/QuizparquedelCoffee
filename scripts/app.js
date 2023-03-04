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
    document.getElementById("card5").classList.toggle("card2Invisible")
    document.getElementById("card6").classList.toggle("card2Invisible")
    document.getElementById("card7").classList.toggle("card2Invisible")
})

// VARIABLE PARA ALMACENAR PUNTOS DE LAS RESPUESTAS CORRECTAS
let puntos = 0


//FUNCIONALIDAD DE MOSTRAR LAS OPCIONES
document.getElementById("cardBtn").addEventListener("click", () => {
    document.getElementById("container").classList.toggle("change")
})

//SELECCIONAR UNA OPCION PARA RESPONDER (PREGUNTA 1)

// RESPUESTA CORRECTA (A)
document.getElementById("opcionA").addEventListener('click', () => {
    puntos++
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
    puntos++
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
    puntos++
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
        pregunta5()
    }, 4500);
   
})

// RESPUESAT CORRECTA (B)

document.getElementById("opcionB4").addEventListener('click', () => {
    puntos++
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
        pregunta5()
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
        pregunta5()
    }, 4500);
   
})


// PREGUNTA 5

function pregunta5() {
    // alert('oh yeah')
    document.getElementById("card5").classList.toggle("card2Invisible")
}


//FUNCIONALIDAD DE MOSTRAR OPCIONES

document.getElementById("cardBtn5").addEventListener("click", () => {
    document.getElementById("container").classList.toggle("change")
})


// RESPUESTA CORRECTA (A)
document.getElementById("opcionA5").addEventListener('click', () => {
    puntos++
    console.log(puntos);
    document.getElementById("opcionA5").style.background = "rgb(0, 255, 0)"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box5").classList.add("card-boxClose")
        document.getElementById('card-contact5').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card5").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta6()
    }, 4500);
   
})

// RESPUESAT INCORRECTA (B)

document.getElementById("opcionB5").addEventListener('click', () => {
    console.log(puntos);
    document.getElementById("opcionB5").style.background = "red"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box5").classList.add("card-boxClose")
        document.getElementById('card-contact5').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card5").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta6()
    }, 4500);
   
})


// RESPUESAT INCORRECTA (C)

document.getElementById("opcionC5").addEventListener('click', () => {
    document.getElementById("opcionC5").style.background = "red"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box5").classList.add("card-boxClose")
        document.getElementById('card-contact5').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card5").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta6()
    }, 4500);
   
})




// PREGUNTA 6

function pregunta6() {
    // alert('oh yeah')
    document.getElementById("card6").classList.toggle("card2Invisible")
}


//FUNCIONALIDAD DE MOSTRAR OPCIONES

document.getElementById("cardBtn6").addEventListener("click", () => {
    document.getElementById("container").classList.toggle("change")
})


// RESPUESTA INCORRECTA (A)
document.getElementById("opcionA6").addEventListener('click', () => {
    document.getElementById("opcionA6").style.background = "red"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box6").classList.add("card-boxClose")
        document.getElementById('card-contact6').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card5").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta7()
    }, 4500);
   
})

// RESPUESAT INCORRECTA (B)

document.getElementById("opcionB6").addEventListener('click', () => {
    document.getElementById("opcionB6").style.background = "red"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box6").classList.add("card-boxClose")
        document.getElementById('card-contact6').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card6").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta7()
    }, 4500);
   
})


// RESPUESAT CORRECTA (C)

document.getElementById("opcionC6").addEventListener('click', () => {
    puntos++
    document.getElementById("opcionC6").style.background = "rgb(0, 255, 0)"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box6").classList.add("card-boxClose")
        document.getElementById('card-contact6').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card6").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta7()
    }, 4500);
   
})




// PREGUNTA 7

function pregunta7() {
    // alert('oh yeah')
    document.getElementById("card7").classList.toggle("card2Invisible")
}


//FUNCIONALIDAD DE MOSTRAR OPCIONES

document.getElementById("cardBtn7").addEventListener("click", () => {
    document.getElementById("container").classList.toggle("change")
})


// RESPUESTA INCORRECTA (A)
document.getElementById("opcionA7").addEventListener('click', () => {
    document.getElementById("opcionA7").style.background = "red"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box7").classList.add("card-boxClose")
        document.getElementById('card-contact7').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card7").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta7()
    }, 4500);
   
})

// RESPUESAT INCORRECTA (B)

document.getElementById("opcionB7").addEventListener('click', () => {
    document.getElementById("opcionB7").style.background = "red"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box7").classList.add("card-boxClose")
        document.getElementById('card-contact7').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card7").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta7()
    }, 4500);
   
})


// RESPUESAT CORRECTA (C)

document.getElementById("opcionC7").addEventListener('click', () => {
    puntos++
    document.getElementById("opcionC7").style.background = "rgb(0, 255, 0)"
    setTimeout(() => {        
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box7").classList.add("card-boxClose")
        document.getElementById('card-contact7').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card7").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta7()
    }, 4500);
   
})
