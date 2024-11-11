
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

function validarFormulario() {
    
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const tema = document.getElementById("tema").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    if (!nombre || !telefono || !correo || !tema || !mensaje) {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    
    if (!emailRegex.test(correo)) {
        alert("Por favor, ingrese una dirección de correo válida.");
        return false;
    }

    
    alert("Formulario enviado correctamente.");
    return true;
}
