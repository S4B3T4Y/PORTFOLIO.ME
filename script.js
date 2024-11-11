// Variable para controlar la visibilidad del menú
let menuVisible = false;

// Función para mostrar u ocultar el menú
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("responsive", !menuVisible);
    menuVisible = !menuVisible;
}

// Función para cerrar el menú al seleccionar una opción
function seleccionar() {
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}

// Función para animar las habilidades cuando el usuario hace scroll
function efectoHabilidades() {
    const skills = document.getElementById("skills");
    const distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;

    // Si la sección de habilidades está a una distancia menor a 300px, se inicia la animación
    if (distanciaSkills >= 300) {
        const habilidades = document.getElementsByClassName("progreso");
        const animClasses = [
            "javascript", "htmlcss", "photoshop", "wordpress", "drupal",
            "comunicacion", "trabajo", "creatividad", "dedicacion", "proyect"
        ];

        // Agrega las clases de animación a cada barra de habilidad
        for (let i = 0; i < habilidades.length; i++) {
            habilidades[i].classList.add(animClasses[i]);
        }
    }
}

// Detectar el evento de scroll para activar la animación de habilidades
window.addEventListener("scroll", efectoHabilidades);

// Activar la animación de habilidades cuando el contenido de la página se haya cargado
document.addEventListener("DOMContentLoaded", efectoHabilidades);
