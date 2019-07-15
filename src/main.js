const data = window.RICKANDMORTY.results;
const buttonReinicio = document.getElementById("button-reinicio");
const buttonPersonajes = document.getElementById("button-personajes");
const buttonPlanetas = document.getElementById("button-planetas");
const buttonExplorar = document.getElementById("button-explorar");
const buttonAyuda = document.getElementById("button-ayuda");
const buttonFilter = document.getElementById("input-filter-personajes");
const buttonSort = document.getElementById("input-sort-personajes");
const screenBienvenida = document.getElementById("pantalla-bienvenida");
const screenPersonajes = document.getElementById("pantalla-personajes");
const screenPlanetas = document.getElementById("pantalla-planetas");
const screenExplorar = document.getElementById("pantalla-explorar");
const screenAyuda = document.getElementById("pantalla-ayuda");
//const buttonInicio = document.getElementById("button-inicio");

const pantallaBienvenida = () => {
    screenBienvenida.classList.remove("disappear");
    screenPersonajes.classList.add("disappear");
    screenPlanetas.classList.add("disappear");
    screenExplorar.classList.add("disappear");
    screenAyuda.classList.add("disappear");
    buttonReinicio.classList.remove("disappear");
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
      str += `<div id="cards">
        <div class="col-10">
            <div class="row">
                <img class="imagen-personaje" src=${element.image}>
            </div>
            <div class="row data-personajes">
                    <h3 class="nombre-personaje">${element.name}</h3>
                    <p>Especie: ${element.species}</p>
                    <p>Género: ${element.gender}</p>
                    <p>Origen: ${element.origin.name}</p>
                    <p>Estatus: ${element.status}</p>
            </div>
        </div>
    </div>`
    });
    document.getElementById("card-display").innerHTML = str;
    }
    printDataPersonajes(data);

let filterData1 = () => {
    let filterValue = buttonFilter.value;
    let splitFilterValue = filterValue.split(".");
    let key = splitFilterValue[0];
    let value = splitFilterValue[1];
    let filterResult = window.filterData(data, key, value);
    printDataPersonajes(filterResult);
};
filterData1();

let sortData = () => {
    let sortValue = buttonSort.value;
    console.log(sortValue);
    if (sortValue === "sortAZ") {
        sortResult = window.sortDataAZ(data, sortValue);
        printDataPersonajes(sortResult);
        console.log(sortResult);        
    } else if (sortValue === "sortZA") {
        sortResult = window.sortDataZA(data, sortValue);
        printDataPersonajes(sortResult);
        console.log(sortResult);
    }
};
sortData();


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
buttonSort.addEventListener("change", sortData);
//buttonInicio.addEventListener("click", pantallaBienvenida);