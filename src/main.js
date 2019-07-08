const buttonReinicio = document.getElementById("button-reinicio");
const buttonPersonajes = document.getElementById("button-personajes");
const buttonPlanetas = document.getElementById("button-planetas");
const buttonExplorar = document.getElementById("button-explorar");
const buttonAyuda = document.getElementById("button-ayuda");
const buttonFilter = document.getElementById("filter-personajes");
const screenBienvenida = document.getElementById("pantalla-bienvenida");
const screenPersonajes = document.getElementById("pantalla-personajes");
const screenPlanetas = document.getElementById("pantalla-planetas");
const screenExplorar = document.getElementById("pantalla-explorar");
const screenAyuda = document.getElementById("pantalla-ayuda");
const buttonInicio = document.getElementById("button-inicio");

const pantallaBienvenida = () => {
    screenBienvenida.classList.remove("disappear");
    screenPersonajes.classList.add("disappear");
    screenPlanetas.classList.add("disappear");
    screenExplorar.classList.add("disappear");
    screenAyuda.classList.add("disappear");
    buttonReinicio.classList.add("disappear");
    buttonFilter.classList.add("disappear");
}

const pantallaPersonajes = () => {
    screenBienvenida.classList.add("disappear");
    screenPersonajes.classList.remove("disappear");
    screenPlanetas.classList.add("disappear");
    screenExplorar.classList.add("disappear");
    screenAyuda.classList.add("disappear");
    buttonReinicio.classList.remove("disappear");
    buttonFilter.classList.remove("disappear");
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
      str += `<div id="cards">
        <div class="col-10">
            <div class="row">
                <img class="imagen-personaje" src=${image}>
            </div>
            <div class="row data-personajes">
                    <h3 class="nombre-personaje">${name}</h3>
                    <p>Especie: ${species}</p>
                    <p>Género: ${gender}</p>
                    <p>Origen: ${origin}</p>
                    <p>Estatus: ${status}</p>
            </div>
        </div>
    </div>`
    });
    document.getElementById("card-display").innerHTML = str;
    };
    printDataPersonajes();

let filterData1 = () => {
    let result = "";
    let filterValue = buttonFilter.value;
    if (filterValue === "all") {
    let result = printDataPersonajes();
    } else if (filterValue === "allAlive") {
    let result = window.allAlive;
    console.log(result);
    } else if (filterValue === "allDead") {
    let result = window.allDead;
    console.log(result);
    } else if (filterValue === "allMale") {
        let result = window.allMale;
        console.log(result);
    } else if (filterValue === "allFemale") {
        let result = window.allFemale;
        console.log(result);
    }    
    return result;
};

const pantallaPlanetas = () => {
    screenBienvenida.classList.add("disappear");
    screenPersonajes.classList.add("disappear");
    screenPlanetas.classList.remove("disappear");
    screenExplorar.classList.add("disappear");
    screenAyuda.classList.add("disappear");
    buttonReinicio.classList.remove("disappear");
    buttonFilter.classList.add("disappear");
}

const pantallaExplorar = () => {
    screenBienvenida.classList.add("disappear");
    screenPersonajes.classList.add("disappear");
    screenPlanetas.classList.add("disappear");
    screenExplorar.classList.remove("disappear");
    screenAyuda.classList.add("disappear");
    buttonReinicio.classList.remove("disappear");
    buttonFilter.classList.add("disappear");
}

const pantallaAyuda = () => {
    screenBienvenida.classList.add("disappear");
    screenPersonajes.classList.add("disappear");
    screenPlanetas.classList.add("disappear");
    screenExplorar.classList.add("disappear");
    screenAyuda.classList.remove("disappear");
    buttonReinicio.classList.remove("disappear");
    buttonFilter.classList.add("disappear");
}

buttonReinicio.addEventListener("click", pantallaBienvenida);
buttonPersonajes.addEventListener("click", pantallaPersonajes);
buttonPlanetas.addEventListener("click", pantallaPlanetas);
buttonExplorar.addEventListener("click", pantallaExplorar);
buttonAyuda.addEventListener("click", pantallaAyuda);
buttonFilter.addEventListener("change", filterData1);
buttonInicio.addEventListener("click", pantallaBienvenida);