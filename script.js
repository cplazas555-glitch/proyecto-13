
let preguntas = document.querySelectorAll(".pregunta");

preguntas.forEach(function(pregunta) {

    pregunta.addEventListener("click", function() {

        let respuesta = pregunta.nextElementSibling;
        let icono = pregunta.querySelector(".icon");

        document.querySelectorAll(".respuesta").forEach(function(item) {
            item.classList.remove("mostrar");
        });

        document.querySelectorAll(".icon").forEach(function(item) {
            item.textContent = "↓";
            respuesta.classList.remove('mostrar')
            
        });

        if (!respuesta.classList.contains("mostrar")) {
            respuesta.classList.add("mostrar");
            icono.textContent = "↑";
        }

    });

});
