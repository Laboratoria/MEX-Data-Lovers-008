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
    document.getElementById('button-reinicio').style.display= "none";
    document.getElementById("footer").style.display= "block";
}

const screenPersonajes = () => {
    document.getElementById("pantalla-bienvenida").style.display="none";
    document.getElementById("pantalla-personajes").style.display="block";
    document.getElementById("pantalla-planetas").style.diplay= "none";
    document.getElementById("pantalla-explorar").style.display= "none";
    document.getElementById("pantalla-ayuda").style.display= "none";
    document.getElementById('button-reinicio').style.display= "block";
    document.getElementById("footer").style.display= "block";
}

let printDataPersonajes = () => {
    let str = "";
    data.forEach(element => {
      let image = element.image;
      let name = element.name;
      let species = element.species;
      let gender = element.gender;
      let origin = element.origin.name
      let status = element.status;
      str += `<div class="card">
      <h3>${name}</h3>
      <img src=${image} alt="">
      <p>Especie: ${species}</p>
      <p>Género: ${gender}</p>
      <p>Origen: ${origin}</p>
      <p>Estatus: ${status}</p>
    </div>`
    });
    document.getElementById("cards").innerHTML = str;
    }
    printDataPersonajes();
    

const screenPlanetas = () => {
    document.getElementById("pantalla-bienvenida").style.display="none";
    document.getElementById("pantalla-personajes").style.display="none";
    document.getElementById("pantalla-planetas").style.diplay= "block";
    document.getElementById("pantalla-explorar").style.display= "none";
    document.getElementById("pantalla-ayuda").style.display= "none";
    document.getElementById('button-reinicio').style.display= "block";
    document.getElementById("footer").style.display= "block";
}

const screenExplorar = () => {
    document.getElementById("pantalla-bienvenida").style.display="none";
    document.getElementById("pantalla-personajes").style.display="none";
    document.getElementById("pantalla-planetas").style.diplay= "none";
    document.getElementById("pantalla-explorar").style.display= "block";
    document.getElementById("pantalla-ayuda").style.display= "none";
    document.getElementById('button-reinicio').style.display= "block";
    document.getElementById("footer").style.display= "block";
}

const screenAyuda = () => {
    document.getElementById("pantalla-bienvenida").style.display="none";
    document.getElementById("pantalla-personajes").style.display="none";
    document.getElementById("pantalla-planetas").style.diplay= "none";
    document.getElementById("pantalla-explorar").style.display= "none";
    document.getElementById("pantalla-ayuda").style.display= "block";
    document.getElementById('button-reinicio').style.display= "block";
    document.getElementById("footer").style.display= "block";
}

buttonInicio.addEventListener("click", screenBienvenida);
buttonReinicio.addEventListener("click", screenBienvenida);
buttonPersonajes.addEventListener("click", screenPersonajes);
buttonPlanetas.addEventListener("click", screenPlanetas);
buttonExplorar.addEventListener("click", screenExplorar);
buttonAyuda.addEventListener("click", screenAyuda);


