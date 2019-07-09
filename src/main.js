const buttonReinicio = document.getElementById("button-reinicio");
const buttonPersonajes = document.getElementById("button-personajes");
const buttonPlanetas = document.getElementById("button-planetas");
const buttonExplorar = document.getElementById("button-explorar");
const buttonAyuda = document.getElementById("button-ayuda");
const buttonFilter = document.getElementById("input-filter-personajes");
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

let printDataPersonajes = (data) => {
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
    printDataPersonajes(data);

let filterData1 = () => {
    let filterResult = "";
    let filterValue = buttonFilter.value;
    console.log(filterValue);
    if (filterValue === "allAlive") {
    let filterResult = window.allAlive;
    console.log(filterResult);
    } else if (filterValue === "allDead") {
    let filterResult = window.allDead;
    printDataPersonajes(filterResult);
    console.log(filterResult);
    } else if (filterValue === "allMale") {
        let filterResult = window.allMale;
        console.log(filterResult);
    } else if (filterValue === "allFemale") {
        let filterResult = window.allFemale;
        console.log(filterResult);
    } else if (filterValue === "all") {
        let filterResult = printDataPersonajes();
    }
    console.log(filterResult);
    return filterResult
        
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

buttonInicio.addEventListener("click", pantallaBienvenida);
buttonReinicio.addEventListener("click", pantallaBienvenida);
buttonPersonajes.addEventListener("click", pantallaPersonajes);
buttonPlanetas.addEventListener("click", pantallaPlanetas);
buttonExplorar.addEventListener("click", pantallaExplorar);
buttonAyuda.addEventListener("click", pantallaAyuda);
buttonFilter.addEventListener("change", filterData1);