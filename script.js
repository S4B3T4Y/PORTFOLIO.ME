
let menuVisible = false;


function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("responsive", !menuVisible);
    menuVisible = !menuVisible;
}


function seleccionar() {
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}


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


window.addEventListener("scroll", efectoHabilidades);


document.addEventListener("DOMContentLoaded", efectoHabilidades);
