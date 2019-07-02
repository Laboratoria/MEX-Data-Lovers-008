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
