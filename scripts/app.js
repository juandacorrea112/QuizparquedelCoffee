//IR AL QUIZ
// document.getElementById("ComenzarQ").addEventListener("click", () => {
//     document.getElementById("contBton").classList.toggle("contBtonGirar")
//     setTimeout(() => {
//         window.location.assign("/pages/quiz.html")
//     },3000)
// })


//FUNCIONALIDAD DE MOSTRAR LAS PREGUNTAS
document.getElementById("cardBtn").addEventListener("click", () => {
    document.getElementById("container").classList.toggle("change")
})

//SELECCIONAR UNA OPCION PARA RESPONDER

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
   
})