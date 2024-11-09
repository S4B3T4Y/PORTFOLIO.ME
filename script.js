let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("responsive", !menuVisible);
    menuVisible = !menuVisible;
}

// Función que oculta el menú una vez que se selecciona una opción
function seleccionar() {
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    const skills = document.getElementById("skills");
    const distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    
    
    if (distanciaSkills >= 300) {
        const habilidades = document.getElementsByClassName("progreso");
        const animClasses = [
            "javascript", "htmlcss", "photoshop", "wordpress", "drupal",
            "comunicacion", "trabajo", "creatividad", "dedicacion", "proyect"
        ];

        
        for (let i = 0; i < habilidades.length; i++) {
            habilidades[i].classList.add(animClasses[i]);
        }
    }
}

// Detectar el evento de scroll para aplicar la animación de la barra de habilidades
window.addEventListener("scroll", efectoHabilidades);

// También, invocar la animación cuando la página se carga completamente
document.addEventListener("DOMContentLoaded", efectoHabilidades);
