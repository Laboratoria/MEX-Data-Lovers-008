const buttonInicio = document.getElementById("button-inicio");
const buttonReinicio = document.getElementById("button-reinicio");
const buttonPersonajes = document.getElementById("button-personajes");
const buttonPlanetas = document.getElementById("button-planetas");
const buttonExplorar = document.getElementById("button-explorar");
const buttonAyuda = document.getElementById("button-ayuda");

const screenBienvenida = () => {
    document.getElementById("pantalla-bienvenida").style.display="block";
    document.getElementById("pantalla-personajes").style.display="none";
    document.getElementById("pantalla-planetas").style.diplay= "none";
    document.getElementById("pantalla-explorar").style.display= "none";
    document.getElementById("pantalla-ayuda").style.display= "none";
    document.getElementById("footer").style.display= "none";
}

const screenPersonajes = () => {
    document.getElementById("pantalla-bienvenida").style.display="none";
    document.getElementById("pantalla-personajes").style.display="block";
    document.getElementById("pantalla-planetas").style.diplay= "none";
    document.getElementById("pantalla-explorar").style.display= "none";
    document.getElementById("pantalla-ayuda").style.display= "none";
    document.getElementById("footer").style.display= "block";
}

const screenPlanetas = () => {
    document.getElementById("pantalla-bienvenida").style.display="none";
    document.getElementById("pantalla-personajes").style.display="none";
    document.getElementById("pantalla-planetas").style.diplay= "block";
    document.getElementById("pantalla-explorar").style.display= "none";
    document.getElementById("pantalla-ayuda").style.display= "none";
    document.getElementById("footer").style.display= "block";
}

const screenExplorar = () => {
    document.getElementById("pantalla-bienvenida").style.display="none";
    document.getElementById("pantalla-personajes").style.display="none";
    document.getElementById("pantalla-planetas").style.diplay= "none";
    document.getElementById("pantalla-explorar").style.display= "block";
    document.getElementById("pantalla-ayuda").style.display= "none";
    document.getElementById("footer").style.display= "block";
}

const screenAyuda = () => {
    document.getElementById("pantalla-bienvenida").style.display="none";
    document.getElementById("pantalla-personajes").style.display="none";
    document.getElementById("pantalla-planetas").style.diplay= "none";
    document.getElementById("pantalla-explorar").style.display= "none";
    document.getElementById("pantalla-ayuda").style.display= "block";
    document.getElementById("footer").style.display= "block";
}

buttonInicio.addEventListener("click", screenBienvenida);
buttonReinicio.addEventListener("click", screenBienvenida);
buttonPersonajes.addEventListener("click", screenPersonajes);
buttonPlanetas.addEventListener("click", screenPlanetas);
buttonExplorar.addEventListener("click", screenExplorar);
buttonAyuda.addEventListener("click", screenAyuda);


