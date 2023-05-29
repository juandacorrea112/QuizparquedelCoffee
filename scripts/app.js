

/*===========TIEMPO DE INNACTIVIDAD DEL USUARIO======*/
const timeInnactivity = 10 * 6 * 1000
let timeoutId;

// Función para reiniciar el temporizador de inactividad
function resetTimer() {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(logout, timeInnactivity)
}

// Función para ejecutar cuando se detecta la inactividad del usuario
function logout() {
    window.location.assign('/pages/index.html')
}

// Escuchar eventos de actividad del usuario
window.addEventListener('mousemove', resetTimer)
window.addEventListener('keydown', resetTimer)

//iniciar temporizador de innactividad
resetTimer()

let puntos = 0
let number = document.getElementById('number')
const formPut = document.getElementById('formPut')
// FUNCIONALIDAD ESCONDER LAS DEMAS PREGUUNTAS
window.addEventListener('load', () => {
    // formPut.classList.toggle('formAddhidden')
    document.getElementById("card2").classList.toggle("card2Invisible")
    document.getElementById("card3").classList.toggle("card2Invisible")
    document.getElementById("card4").classList.toggle("card2Invisible")
    document.getElementById("card5").classList.toggle("card2Invisible")
    document.getElementById("card6").classList.toggle("card2Invisible")
    document.getElementById("card7").classList.toggle("card2Invisible")
    document.getElementById("card8").classList.toggle("card2Invisible")
    document.getElementById("card9").classList.toggle("card2Invisible")
    document.getElementById("card10").classList.toggle("card2Invisible")

    number.textContent = puntos
})


window.addEventListener('load', () => {
    formPut.classList.toggle('formAddhidden')
})


/* =========== activar formulario =========== */
let user = 'juan david'
let password = 'parque2020'
const confirmModal = document.getElementById('confirmModal')

/* ----inputs----- */
let inputName = document.getElementById('inputName')
let inputPassword = document.getElementById('inputPassword')

/*prueba*/
let pregunta1 = document.getElementById('pregunta1')

document.addEventListener('keyup', function (event) {
    // Verifica si la tecla presionada es "Enter" (código 13)
    if (event.keyCode === 13) {
        // Llama a tu función aquí
        formPut.classList.remove('formAddhidden')
        formPut.classList.add('formAddquestion')
    }
});

const closeModal = document.getElementById('closeModal')
closeModal.addEventListener('click', function () {
    formPut.classList.toggle('formAddquestion')
    formPut.classList.toggle('formAddhidden')
})

confirmModal.addEventListener('click', () => {
    if (inputName.value == user && inputPassword.value == password) {

        formPut.classList.toggle('formAddhidden')
        formPut.classList.toggle('formAddquestion')

        fetch('/scripts/preguntas.txt')
            .then(response => response.text())
            .then(data => {
                // Divide el contenido en párrafos
                const preguntas = data.split('\n')
                // pregunta1.textContent = preguntas[0]
                // pruebadecambio.textContent = preguntas[0]
                console.log(preguntas);


                // parrafdes2015.textContent = parrafos[3]

                setTimeout(() => {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'haz actualizado las preguntas correactamente',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }, 1000);

            })
            .catch(error => {
                console.error('Error al obtener el archivo de texto:', error);
            })
    }
})
//FUNCIONALIDAD DE MOSTRAR LAS OPCIONES
document.getElementById("cardBtn").addEventListener("click", () => {
    document.getElementById("container").classList.toggle("change")
})


// RESPUESTA CORRECTA (A)
document.getElementById("opcionA").addEventListener('click', () => {
    puntos++
    number.textContent = puntos
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
    number.textContent = puntos
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
    number.textContent = puntos
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
    number.textContent = puntos
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
    document.getElementById("card5").classList.toggle("card2Invisible")
}


//FUNCIONALIDAD DE MOSTRAR OPCIONES

document.getElementById("cardBtn5").addEventListener("click", () => {
    document.getElementById("container").classList.toggle("change")
})


// RESPUESTA CORRECTA (A)
document.getElementById("opcionA5").addEventListener('click', () => {
    puntos++
    number.textContent = puntos
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
        document.getElementById("card6").style.display = "none"
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
    number.textContent = puntos
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
        pregunta8()
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
        pregunta8()
    }, 4500);

})


// RESPUESAT CORRECTA (C)

document.getElementById("opcionC7").addEventListener('click', () => {
    puntos++
    number.textContent = puntos
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
        pregunta8()
    }, 4500);

})


// PREGUNTA 8

function pregunta8() {
    document.getElementById("card8").classList.toggle("card2Invisible")
}


//FUNCIONALIDAD DE MOSTRAR OPCIONES

document.getElementById("cardBtn8").addEventListener("click", () => {
    document.getElementById("container").classList.toggle("change")
})


// RESPUESTA INCORRECTA (A)
document.getElementById("opcionA8").addEventListener('click', () => {
    document.getElementById("opcionA8").style.background = "red"
    setTimeout(() => {
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box8").classList.add("card-boxClose")
        document.getElementById('card-contact8').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card8").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta9()
    }, 4500);

})

// RESPUESAT CORRECTA (B)

document.getElementById("opcionB8").addEventListener('click', () => {
    puntos++
    number.textContent = puntos
    document.getElementById("opcionB8").style.background = "rgb(0, 255, 0)"
    setTimeout(() => {
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box8").classList.add("card-boxClose")
        document.getElementById('card-contact8').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card8").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta9()
    }, 4500);

})


// RESPUESAT INCORRECTA (C)

document.getElementById("opcionC8").addEventListener('click', () => {
    document.getElementById("opcionC8").style.background = "red"
    setTimeout(() => {
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box8").classList.add("card-boxClose")
        document.getElementById('card-contact8').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card8").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta9()
    }, 4500);

})


// PREGUNTA 9

function pregunta9() {
    document.getElementById("card9").classList.toggle("card2Invisible")
}


//FUNCIONALIDAD DE MOSTRAR OPCIONES

document.getElementById("cardBtn9").addEventListener("click", () => {
    document.getElementById("container").classList.toggle("change")
})


// RESPUESTA INCORRECTA (A)
document.getElementById("opcionA9").addEventListener('click', () => {
    document.getElementById("opcionA9").style.background = "red"
    setTimeout(() => {
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box9").classList.add("card-boxClose")
        document.getElementById('card-contact9').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card9").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta10()
    }, 4500);

})

// RESPUESAT INCORRECTA (B)

document.getElementById("opcionB9").addEventListener('click', () => {
    document.getElementById("opcionB9").style.background = "red"
    setTimeout(() => {
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box9").classList.add("card-boxClose")
        document.getElementById('card-contact9').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card9").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta10()
    }, 4500);

})


// RESPUESAT CORRECTA (C)

document.getElementById("opcionC9").addEventListener('click', () => {
    puntos++
    number.textContent = puntos
    document.getElementById("opcionC9").style.background = "rgb(0, 255, 0)"
    setTimeout(() => {
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box9").classList.add("card-boxClose")
        document.getElementById('card-contact9').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card9").style.display = "none"
    }, 3500);

    setTimeout(() => {
        pregunta10()
    }, 4500);

})


// PREGUNTA 10

function pregunta10() {
    document.getElementById("card10").classList.toggle("card2Invisible")
}


//FUNCIONALIDAD DE MOSTRAR OPCIONES

document.getElementById("cardBtn10").addEventListener("click", () => {
    document.getElementById("container").classList.toggle("change")
})


// RESPUESTA INCORRECTA (A)
document.getElementById("opcionA10").addEventListener('click', () => {
    document.getElementById("opcionA10").style.background = "red"
    setTimeout(() => {
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box10").classList.add("card-boxClose")
        document.getElementById('card-contact10').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card10").style.display = "none"
    }, 3500);

    setTimeout(() => {
        if (puntos >= 6) {
            window.location.assign("/fireworks/winner.html")
        } else {
            window.location.assign("/pages/loserPlayer.html")
        }
    }, 4500);

})

// RESPUESAT INCORRECTA (B)

document.getElementById("opcionB10").addEventListener('click', () => {
    document.getElementById("opcionB10").style.background = "red"
    setTimeout(() => {
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box10").classList.add("card-boxClose")
        document.getElementById('card-contact10').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card10").style.display = "none"
    }, 3500);

    setTimeout(() => {
        if (puntos >= 6) {
            window.location.assign("/fireworks/winner.html")
        } else {
            window.location.assign("/pages/loserPlayer.html")
        }
    }, 4500);

})


// RESPUESAT CORRECTA (C)

document.getElementById("opcionC10").addEventListener('click', () => {
    puntos++
    number.textContent = puntos
    document.getElementById("opcionC10").style.background = "rgb(0, 255, 0)"
    setTimeout(() => {
        document.getElementById("container").classList.toggle("change")
    }, 900);

    setTimeout(() => {
        document.getElementById("card-box10").classList.add("card-boxClose")
        document.getElementById('card-contact10').classList.add("card-contactClose")
    }, 2000);

    setTimeout(() => {
        document.getElementById("card10").style.display = "none"
    }, 3500);

    setTimeout(() => {
        if (puntos >= 6 && puntos < 10) {
            window.location.assign("/fireworks/winner.html")
        }
        else if (puntos == 10) {
            window.location.assign("/pages/perfectScore.html")
        }
        else {
            window.location.assign("/pages/loserPlayer.html")
        }
    }, 4500);

})

