const buttonInicio = document.getElementById("button-inicio");
const buttonReinicio = document.getElementById("button-reinicio");
const buttonPersonajes = document.getElementById("button-personajes");
const buttonPlanetas = document.getElementById("button-planetas");
const buttonExplorar = document.getElementById("button-explorar");
const buttonAyuda = document.getElementById("button-ayuda");
const buttonFilter = document.getElementById("filter-personajes");

const screenBienvenida = () => {
    document.getElementById("pantalla-bienvenida").style.display="block";
    document.getElementById("pantalla-personajes").style.display="none";
    document.getElementById("pantalla-planetas").style.diplay= "none";
    document.getElementById("pantalla-explorar").style.display= "none";
    document.getElementById("pantalla-ayuda").style.display= "none";
    document.getElementById('button-reinicio').style.display= "none";
    const buttonFilter = document.getElementById("filter-personajes").style.display= "none";
}

const screenPersonajes = () => {
    document.getElementById("pantalla-bienvenida").style.display="none";
    document.getElementById("pantalla-personajes").style.display="block";
    document.getElementById("pantalla-planetas").style.diplay= "none";
    document.getElementById("pantalla-explorar").style.display= "none";
    document.getElementById("pantalla-ayuda").style.display= "none";
    document.getElementById('button-reinicio').style.display= "block";
    const buttonFilter = document.getElementById("filter-personajes").style.display= "block";
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
        <div class="card row">
            <img class="imagen-personaje" src=${image}>
                <div class="card-info">
                    <h3 class="nombre-personaje">${name}</h3>
                    <p>Especie: ${species}</p>
                    <p>Género: ${gender}</p>
                    <p>Origen: ${origin}</p>
                    <p>Estatus: ${status}</p>
                </div>
        </div>
    </div>`
    });
    document.getElementById("cards").innerHTML = str;
    }
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

const screenPlanetas = () => {
    document.getElementById("pantalla-bienvenida").style.display="none";
    document.getElementById("pantalla-personajes").style.display="none";
    document.getElementById("pantalla-planetas").style.diplay= "block";
    document.getElementById("pantalla-explorar").style.display= "none";
    document.getElementById("pantalla-ayuda").style.display= "none";
    document.getElementById('button-reinicio').style.display= "block";
    const buttonFilter = document.getElementById("filter-personajes").style.display= "none";
}

const screenExplorar = () => {
    document.getElementById("pantalla-bienvenida").style.display="none";
    document.getElementById("pantalla-personajes").style.display="none";
    document.getElementById("pantalla-planetas").style.diplay= "none";
    document.getElementById("pantalla-explorar").style.display= "block";
    document.getElementById("pantalla-ayuda").style.display= "none";
    document.getElementById('button-reinicio').style.display= "block";
    const buttonFilter = document.getElementById("filter-personajes").style.display= "none";
}

const screenAyuda = () => {
    document.getElementById("pantalla-bienvenida").style.display="none";
    document.getElementById("pantalla-personajes").style.display="none";
    document.getElementById("pantalla-planetas").style.diplay= "none";
    document.getElementById("pantalla-explorar").style.display= "none";
    document.getElementById("pantalla-ayuda").style.display= "block";
    document.getElementById('button-reinicio').style.display= "block";
    const buttonFilter = document.getElementById("filter-personajes").style.display= "none";
}

buttonInicio.addEventListener("click", screenBienvenida);
buttonReinicio.addEventListener("click", screenBienvenida);
buttonPersonajes.addEventListener("click", screenPersonajes);
buttonPlanetas.addEventListener("click", screenPlanetas);
buttonExplorar.addEventListener("click", screenExplorar);
buttonAyuda.addEventListener("click", screenAyuda);
buttonFilter.addEventListener("change", filterData1);
