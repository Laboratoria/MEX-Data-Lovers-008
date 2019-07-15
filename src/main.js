//Variables globales para funciones DOM y manipular data
const data = window.RICKANDMORTY.results;
const buttonReinicio = document.getElementById("button-reinicio");
const buttonPersonajes = document.getElementById("button-personajes");
//const buttonPlanetas = document.getElementById("button-planetas");
const buttonExplorar = document.getElementById("button-explorar");
const buttonAyuda = document.getElementById("button-ayuda");
const buttonFilter = document.getElementById("input-filter-personajes");
const buttonSort = document.getElementById("input-sort-personajes");
const screenBienvenida = document.getElementById("pantalla-bienvenida");
const screenPersonajes = document.getElementById("pantalla-personajes");
//const screenPlanetas = document.getElementById("pantalla-planetas");
const screenExplorar = document.getElementById("pantalla-explorar");
const screenAyuda = document.getElementById("pantalla-ayuda");

//Función para pantalla de bienvenida
const pantallaBienvenida = () => {
    screenBienvenida.classList.remove("disappear");
    screenPersonajes.classList.add("disappear");
    //screenPlanetas.classList.add("disappear");
    screenExplorar.classList.add("disappear");
    screenAyuda.classList.add("disappear");
    buttonReinicio.classList.remove("disappear");
}

//Función para pantalla de personajes
const pantallaPersonajes = () => {
    screenBienvenida.classList.add("disappear");
    screenPersonajes.classList.remove("disappear");
    //screenPlanetas.classList.add("disappear");
    screenExplorar.classList.add("disappear");
    screenAyuda.classList.add("disappear");
    buttonReinicio.classList.remove("disappear");
}

//Función para pintar toda la data de los personajes
let printDataPersonajes = (data) => {
    let str = "";//Variable vacía para recibir resultado
    data.forEach(element => { // Método para recorrer todas las entradas del array. Enseguida se crea un template string para imprimir los datos que queremos de cada entrada.
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
    document.getElementById("card-display").innerHTML = str;//Imprime en pantalla
    }
    printDataPersonajes(data);

//Función para filtrar data    
let filterData1 = () => {
    let filterValue = buttonFilter.value;//Obtiene el value elegido por usuarix para filtrar
    let splitFilterValue = filterValue.split(".");//Método split que permite obtener del value del input los parámetros para filtrar
    let key = splitFilterValue[0];//Obtiene key de la entrada del objeto, como cirterio de filtrado
    let value = splitFilterValue[1];//Obtiene el valor elegido para filtrar
    let filterResult = window.filterData(data, key, value);
    printDataPersonajes(filterResult);
};
filterData1();

//Función para ordenar data por nombre en orden A-Z y Z-A
let sortData = () => {
    let sortValue = buttonSort.value; //Obtiene valor elegido por usuarix para ordenar
    if (sortValue === "sortAZ") {
        sortResult = window.sortDataAZ(data, sortValue);
        printDataPersonajes(sortResult);
    } else if (sortValue === "sortZA") {
        sortResult = window.sortDataZA(data, sortValue);
        printDataPersonajes(sortResult);
    }
};
sortData();

/*Pantalla para data de planetas. Tentativo retirar.
const pantallaPlanetas = () => {
    screenBienvenida.classList.add("disappear");
    screenPersonajes.classList.add("disappear");
    screenPlanetas.classList.remove("disappear");
    screenExplorar.classList.add("disappear");
    screenAyuda.classList.add("disappear");
    buttonReinicio.classList.remove("disappear");
}*/

//Pantalla de recursos externos
const pantallaExplorar = () => {
    screenBienvenida.classList.add("disappear");
    screenPersonajes.classList.add("disappear");
    //screenPlanetas.classList.add("disappear");
    screenExplorar.classList.remove("disappear");
    screenAyuda.classList.add("disappear");
    buttonReinicio.classList.remove("disappear");
}

//Pantalla de información sobre la web app
const pantallaAyuda = () => {
    screenBienvenida.classList.add("disappear");
    screenPersonajes.classList.add("disappear");
    //screenPlanetas.classList.add("disappear");
    screenExplorar.classList.add("disappear");
    screenAyuda.classList.remove("disappear");
    buttonReinicio.classList.remove("disappear");
}

//Declara funciones del DOM
buttonReinicio.addEventListener("click", pantallaBienvenida);
buttonPersonajes.addEventListener("click", pantallaPersonajes);
//buttonPlanetas.addEventListener("click", pantallaPlanetas);
buttonExplorar.addEventListener("click", pantallaExplorar);
buttonAyuda.addEventListener("click", pantallaAyuda);
buttonFilter.addEventListener("change", filterData1);
buttonSort.addEventListener("change", sortData);