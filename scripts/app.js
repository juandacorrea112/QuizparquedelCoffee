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

/*----------------------PREGUNTAS------------------*/
let pregunta1 = document.getElementById('pregunta1')
let Sgpregunta = document.getElementById('Sgpregunta')
let terpregunta = document.getElementById('terpregunta')
let cuarpregunta = document.getElementById('cuarpregunta')
let quinpregunta = document.getElementById('quinpregunta')
let sextpregunta = document.getElementById('sextpregunta')
let septmpregunta = document.getElementById('septmpregunta')
let octavpregunta = document.getElementById('octavpregunta')
let novenpregunta = document.getElementById('novenpregunta')
let decimpregunta = document.getElementById('decimpregunta')
/*-------------------------------------------------*/

/*----------------------OPCIONES-------------------*/
let respuestaA1 = document.getElementById('respuestaA1')
let respuestaB1 = document.getElementById('respuestaB1')
let respuestaC1 = document.getElementById('respuestaC1')

let respuestaA2 = document.getElementById('respuestaA2')
let respuestaB2 = document.getElementById('respuestaB2')
let respuestaC2 = document.getElementById('respuestaC2')

let respuestaA3 = document.getElementById('respuestaA3')
let respuestaB3 = document.getElementById('respuestaB3')
let respuestaC3 = document.getElementById('respuestaC3')

let respuestaA4 = document.getElementById('respuestaA4')
let respuestaB4 = document.getElementById('respuestaB4')
let respuestaC4 = document.getElementById('respuestaC4')

let respuestaA5 = document.getElementById('respuestaA5')
let respuestaB5 = document.getElementById('respuestaB5')
let respuestaC5 = document.getElementById('respuestaC5')

let respuestaA6 = document.getElementById('respuestaA6')
let respuestaB6 = document.getElementById('respuestaB6')
let respuestaC6 = document.getElementById('respuestaC6')

let respuestaA7 = document.getElementById('respuestaA7')
let respuestaB7 = document.getElementById('respuestaB7')
let respuestaC7 = document.getElementById('respuestaC7')

let respuestaA8 = document.getElementById('respuestaA8')
let respuestaB8 = document.getElementById('respuestaB8')
let respuestaC8 = document.getElementById('respuestaC8')

let respuestaA9 = document.getElementById('respuestaA9')
let respuestaB9 = document.getElementById('respuestaB9')
let respuestaC9 = document.getElementById('respuestaC9')

let respuestaA10 = document.getElementById('respuestaA10')
let respuestaB10 = document.getElementById('respuestaB10')
let respuestaC10 = document.getElementById('respuestaC10')
/*-------------------------------------------------*/
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
                pregunta1.textContent = preguntas[1]
                respuestaA1.textContent = preguntas[3]
                respuestaB1.textContent = preguntas[5]
                respuestaC1.textContent = preguntas[7]

                Sgpregunta.textContent = preguntas[9]
                respuestaA2.textContent = preguntas[11]
                respuestaB2.textContent = preguntas[13]
                respuestaC2.textContent = preguntas[15]

                terpregunta.textContent = preguntas[17]
                respuestaA3.textContent = preguntas[19]
                respuestaB3.textContent = preguntas[21]
                respuestaC3.textContent = preguntas[23]

                cuarpregunta.textContent = preguntas[25]
                respuestaA4.textContent = preguntas[27]
                respuestaB4.textContent = preguntas[29]
                respuestaC4.textContent = preguntas[31]

                quinpregunta.textContent = preguntas[33]
                respuestaA5.textContent = preguntas[35]
                respuestaB5.textContent = preguntas[37]
                respuestaC5.textContent = preguntas[39]

                sextpregunta.textContent = preguntas[41]
                respuestaA6.textContent = preguntas[43]
                respuestaB6.textContent = preguntas[45]
                respuestaC6.textContent = preguntas[47]

                septmpregunta.textContent = preguntas[49]
                respuestaA7.textContent = preguntas[51]
                respuestaB7.textContent = preguntas[53]
                respuestaC7.textContent = preguntas[55]

                octavpregunta.textContent = preguntas[57]
                respuestaA8.textContent = preguntas[59]
                respuestaB8.textContent = preguntas[61]
                respuestaC8.textContent = preguntas[63]

                novenpregunta.textContent = preguntas[65]
                respuestaA9.textContent = preguntas[67]
                respuestaB9.textContent = preguntas[69]
                respuestaC9.textContent = preguntas[71]

                decimpregunta.textContent = preguntas[73]
                respuestaA10.textContent = preguntas[75]
                respuestaB10.textContent = preguntas[77]
                respuestaC10.textContent = preguntas[79]
                // pruebadecambio.textContent = preguntas[0]
                console.log(preguntas[0]);

                //guardar el valor en la cookie
                document.cookie = "Pregunta1=" + encodeURIComponent(pregunta1.innerHTML)
                document.cookie = "respuestaA1=" + encodeURIComponent(respuestaA1.innerHTML)
                document.cookie = "respuestaB1=" + encodeURIComponent(respuestaB1.innerHTML)
                document.cookie = "respuestaC1=" + encodeURIComponent(respuestaC1.innerHTML)
                document.cookie = "Sgpregunta=" + encodeURIComponent(Sgpregunta.innerHTML)
                document.cookie = "respuestaA2=" + encodeURIComponent(respuestaA2.innerHTML)
                document.cookie = "respuestaB2=" + encodeURIComponent(respuestaB2.innerHTML)
                document.cookie = "respuestaC2=" + encodeURIComponent(respuestaC2.innerHTML)
                document.cookie = "terpregunta=" + encodeURIComponent(terpregunta.innerHTML)
                document.cookie = "respuestaA3=" + encodeURIComponent(respuestaA3.innerHTML)
                document.cookie = "respuestaB3=" + encodeURIComponent(respuestaB3.innerHTML)
                document.cookie = "respuestaC3=" + encodeURIComponent(respuestaC3.innerHTML)
                document.cookie = "cuarpregunta=" + encodeURIComponent(cuarpregunta.innerHTML)
                document.cookie = "respuestaA4=" + encodeURIComponent(respuestaA4.innerHTML)
                document.cookie = "respuestaB4=" + encodeURIComponent(respuestaB4.innerHTML)
                document.cookie = "respuestaC4=" + encodeURIComponent(respuestaC4.innerHTML)
                document.cookie = "quinpregunta=" + encodeURIComponent(quinpregunta.innerHTML)
                document.cookie = "respuestaA5=" + encodeURIComponent(respuestaA5.innerHTML)
                document.cookie = "respuestaB5=" + encodeURIComponent(respuestaB5.innerHTML)
                document.cookie = "respuestaC5=" + encodeURIComponent(respuestaC5.innerHTML)
                document.cookie = "sextpregunta=" + encodeURIComponent(sextpregunta.innerHTML)
                document.cookie = "respuestaA6=" + encodeURIComponent(respuestaA6.innerHTML)
                document.cookie = "respuestaB6=" + encodeURIComponent(respuestaB6.innerHTML)
                document.cookie = "respuestaC6=" + encodeURIComponent(respuestaC6.innerHTML)
                document.cookie = "septmpregunta=" + encodeURIComponent(septmpregunta.innerHTML)
                document.cookie = "respuestaA7=" + encodeURIComponent(respuestaA7.innerHTML)
                document.cookie = "respuestaB7=" + encodeURIComponent(respuestaB7.innerHTML)
                document.cookie = "respuestaC7=" + encodeURIComponent(respuestaC7.innerHTML)
                document.cookie = "octavpregunta=" + encodeURIComponent(octavpregunta.innerHTML)
                document.cookie = "respuestaA8=" + encodeURIComponent(respuestaA8.innerHTML)
                document.cookie = "respuestaB8=" + encodeURIComponent(respuestaB8.innerHTML)
                document.cookie = "respuestaC8=" + encodeURIComponent(respuestaC8.innerHTML)
                document.cookie = "novenpregunta=" + encodeURIComponent(novenpregunta.innerHTML)
                document.cookie = "respuestaA9=" + encodeURIComponent(respuestaA9.innerHTML)
                document.cookie = "respuestaB9=" + encodeURIComponent(respuestaB9.innerHTML)
                document.cookie = "respuestaC9=" + encodeURIComponent(respuestaC9.innerHTML)
                document.cookie = "decimpregunta=" + encodeURIComponent(decimpregunta.innerHTML)
                document.cookie = "respuestaA10=" + encodeURIComponent(respuestaA10.innerHTML)
                document.cookie = "respuestaB10=" + encodeURIComponent(respuestaB10.innerHTML)
                document.cookie = "respuestaC10=" + encodeURIComponent(respuestaC10.innerHTML)

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

// Función para leer el valor de una cookie por su nombre
function getCookie(nombre) {
    var cookieName = nombre + "=";
    var cookies = document.cookie.split(";");
  
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
  
      if (cookie.indexOf(cookieName) === 0) {
        return decodeURIComponent(cookie.substring(cookieName.length, cookie.length));
      }
    }
  
    return null;
  }

  // Cuando la página se carga, verifica si hay una cookie para el contenido del h1 y actualiza su valor si es necesario
  window.onload = function() {
    let pregunta1Cont = getCookie("Pregunta1")
    let pregunta1ContA1 = getCookie("respuestaA1")
    let pregunta1ContB1 = getCookie("respuestaB1")
    let pregunta1ContC1 = getCookie("respuestaC1")
    let pregunta1Cont2 = getCookie("Sgpregunta")
    let pregunta1ContA2 = getCookie("respuestaA2")
    let pregunta1ContB2 = getCookie("respuestaB2")
    let pregunta1ContC2 = getCookie("respuestaC2")
    let pregunta1Cont3= getCookie("terpregunta")
    let pregunta1ContA3 = getCookie("respuestaA3")
    let pregunta1ContB3 = getCookie("respuestaB3")
    let pregunta1ContC3 = getCookie("respuestaC3")
    let pregunta1Cont4 = getCookie("cuarpregunta")
    let pregunta1ContA4 = getCookie("respuestaA4")
    let pregunta1ContB4 = getCookie("respuestaB4")
    let pregunta1ContC4 = getCookie("respuestaC4")
    let pregunta1Cont5 = getCookie("quinpregunta")
    let pregunta1ContA5 = getCookie("respuestaA5")
    let pregunta1ContB5 = getCookie("respuestaB5")
    let pregunta1ContC5 = getCookie("respuestaC5")
    let pregunta1Cont6 = getCookie("sextpregunta")
    let pregunta1ContA6 = getCookie("respuestaA6")
    let pregunta1ContB6 = getCookie("respuestaB6")
    let pregunta1ContC6 = getCookie("respuestaC6")
    let pregunta1Cont7 = getCookie("septmpregunta")
    let pregunta1ContA7 = getCookie("respuestaA7")
    let pregunta1ContB7 = getCookie("respuestaB7")
    let pregunta1ContC7 = getCookie("respuestaC7")
    let pregunta1Cont8 = getCookie("octavpregunta")
    let pregunta1ContA8 = getCookie("respuestaA8")
    let pregunta1ContB8 = getCookie("respuestaB8")
    let pregunta1ContC8 = getCookie("respuestaC8")
    let pregunta1Cont9 = getCookie("novenpregunta")
    let pregunta1ContA9 = getCookie("respuestaA9")
    let pregunta1ContB9 = getCookie("respuestaB9")
    let pregunta1ContC9 = getCookie("respuestaC9")
    let pregunta1Cont10 = getCookie("decimpregunta")
    let pregunta1ContA10 = getCookie("respuestaA10")
    let pregunta1ContB10 = getCookie("respuestaB10")
    let pregunta1ContC10 = getCookie("respuestaC10")


    if (pregunta1Cont) {
        pregunta1.innerHTML = pregunta1Cont
    }

    if (pregunta1ContA1) {
        respuestaA1.innerHTML = pregunta1ContA1
    }

    if (pregunta1ContB1) {
        respuestaB1.innerHTML = pregunta1ContB1
    }

    if (pregunta1ContC1) {
        respuestaC1.innerHTML = pregunta1ContC1
    }

    if (pregunta1Cont2) {
        Sgpregunta.innerHTML = pregunta1Cont2
    }

    if (pregunta1ContA2) {
        respuestaA2.innerHTML = pregunta1ContA2
    }

    if (pregunta1ContB2) {
        respuestaB2.innerHTML = pregunta1ContB2
    }

    if (pregunta1ContC2) {
        respuestaC2.innerHTML = pregunta1ContC2
    }

    if (pregunta1Cont3) {
        terpregunta.innerHTML = pregunta1Cont3
    }

    if (pregunta1ContA3) {
        respuestaA3.innerHTML = pregunta1ContA3
    }

    if (pregunta1ContB3) {
        respuestaB3.innerHTML = pregunta1ContB3
    }

    if (pregunta1ContC3) {
        respuestaC3.innerHTML = pregunta1ContC3
    }

    if (pregunta1Cont4) {
        cuarpregunta.innerHTML = pregunta1Cont4
    }

    if (pregunta1ContA4) {
        respuestaA4.innerHTML = pregunta1ContA4
    }

    if (pregunta1ContB4) {
        respuestaB4.innerHTML = pregunta1ContB4
    }

    if (pregunta1ContC4) {
        respuestaC4.innerHTML = pregunta1ContC4
    }

    if (pregunta1Cont5) {
        quinpregunta.innerHTML = pregunta1Cont5
    }

    if (pregunta1ContA5) {
        respuestaA5.innerHTML = pregunta1ContA5
    }

    if (pregunta1ContB5) {
        respuestaB5.innerHTML = pregunta1ContB5
    }

    if (pregunta1ContC5) {
        respuestaC5.innerHTML = pregunta1ContC5
    }

    if (pregunta1Cont6) {
        sextpregunta.innerHTML = pregunta1Cont6
    }

    if (pregunta1ContA6) {
        respuestaA6.innerHTML = pregunta1ContA6
    }

    if (pregunta1ContB6) {
        respuestaB6.innerHTML = pregunta1ContB6
    }

    if (pregunta1ContC6) {
        respuestaC6.innerHTML = pregunta1ContC6
    }

    if (pregunta1Cont7) {
        septmpregunta.innerHTML = pregunta1Cont7
    }

    if (pregunta1ContA7) {
        respuestaA7.innerHTML = pregunta1ContA7
    }

    if (pregunta1ContB7) {
        respuestaB7.innerHTML = pregunta1ContB7
    }

    if (pregunta1ContC7) {
        respuestaC7.innerHTML = pregunta1ContC7
    }
    
    if (pregunta1Cont8) {
        octavpregunta.innerHTML = pregunta1Cont8
    }

    if (pregunta1ContA8) {
        respuestaA8.innerHTML = pregunta1ContA8
    }

    if (pregunta1ContB8) {
        respuestaB8.innerHTML = pregunta1ContB8
    }

    if (pregunta1ContC8) {
        respuestaC8.innerHTML = pregunta1ContC8
    }

    if (pregunta1Cont9) {
        novenpregunta.innerHTML = pregunta1Cont9
    }

    if (pregunta1ContA9) {
        respuestaA9.innerHTML = pregunta1ContA9
    }

    if (pregunta1ContB9) {
        respuestaB9.innerHTML = pregunta1ContB9
    }

    if (pregunta1ContC9) {
        respuestaC9.innerHTML = pregunta1ContC9
    }

    if (pregunta1Cont10) {
        decimpregunta.innerHTML = pregunta1Cont10
    }

    if (pregunta1ContA10) {
        respuestaA10.innerHTML = pregunta1ContA10
    }

    if (pregunta1ContB10) {
        respuestaB10.innerHTML = pregunta1ContB10
    }

    if (pregunta1ContC10) {
        respuestaC10.innerHTML = pregunta1ContC10
    }

  }

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