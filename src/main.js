
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



//Botones
const botonInicio= document.getElementById ("boton-inicio")
const botonPersonajes= document.getElementById ("boton-personajes")
const botonPlanetasDimensiones= document.getElementById ("boton-planetas-dimensiones")
const botonExplorar= document.getElementById ("boton-explorar")
const botonAyuda= document.getElementById ("boton-ayuda")
//Secciones
const seccionPersonajes= document.getElementById("Personajes")
const seccionPlanetasDimensiones= document.getElementById("PlanetasyDimensiones")
const seccionExplorar= document.getElementById("Explorar")
const seccionAyuda= document.getElementById("Ayuda")
const seccionInicio= document.getElementById("Inicio")
const root= document.getElementById ("root")
//Funcionalidad Secciones
const mostrarSeccionPersonajes= ()=>
seccionPersonajes.classList.remove ("desaparecer")
const mostrarSeccionPlanetasDimensiones= ()=>
seccionPlanetasDimensiones.classList.remove ("desaparecer")
const mostrarSeccionExplorar= ()=>
seccionExplorar.classList.remove ("desaparecer")
const mostrarSeccionAyuda= ()=>
seccionAyuda.classList.remove ("desaparecer")
const mostrarSeccionInicio= ()=>
seccionInicio.classList.remove ("desaparecer")

//Funcionalidad botones
botonPersonajes.addEventListener ("click",mostrarSeccionPersonajes)
botonPlanetas.addEventListener ("click",mostrarSeccionPlanetasDimensiones)
botonAyuda.addEventListener ("click",mostrarSeccionAyuda)
botonExplorar.addEventListener ("click",mostrarSeccionExplorar)

const data =RICKANDMORTY.results
let str= ''
data.forEach(element=> {
  let name= element.name;
  let origin= element.origin;
  let species=element.species;
  let image=element.image;
  str += `<div class="fondo">
 <h3 class="prueba"> ${name}</h3>
 <p class="prueba"> ${origin}</p>
 <p> ${species}</p>
 <img src=${image} alt=""
 </div>
  `
});
root.innerHTML = str
