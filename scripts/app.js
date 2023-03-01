//IR AL QUIZ
// const btnstarQ = document.getElementById('ComenzarQ')

// btnstarQ.addEventListener('click', Goquiz)

// function Goquiz() {
//     window.location.assign("/pages/quiz.html")
// }

//FUNCIONALIDAD DE MOSTRAR LAS PREGUNTAS
document.getElementById("cardBtn").addEventListener("click", () => {
    document.getElementById("container").classList.toggle("change")
})