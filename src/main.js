
for(personajes in RICKANDMORTY.results){ 
  // console.log(RICKANDMORTY.results[personajes].image); 
  //console.log(RICKANDMORTY.results[personajes].gender); 
}
for(personajes in RICKANDMORTY.results){
  // console.log(RICKANDMORTY.results[personajes].image); 
  //console.log(RICKANDMORTY.results[personajes].gender);
}
const data = RICKANDMORTY.results;
// const data RICKANDMORTY.results
const paraPintar = document.getElementById ('data');

const muestraData = () => {
  let str = '';
  data.forEach(element => {
    console.log(element)
    str += `<div class="tarjeta">
    <div class="nombre">
    <p> ${element.name}</p></div>
    <br>
    <div class="img"> 
    <img src="${element.image}"></img>
    </div>
 <div class= "info">
 
    <p> Status: ${element.status} </p>
    <p> Especie: ${element.species} </p>
    <p> tamaño: ${element.origin.name} </p>
    <p> Otro: ${element.location.name}</p>
    </div>
    </div>`
  });

  paraPintar.innerHTML = str;

}

muestraData()

// movimiento boton ir abajo
// $(document).ready(funtion(){

//   $('.ir-abajo').click(funtion(){
//     $('body.html').animate({

// let filterType = (fl) => {
//   const typeValue = fl.target.value; //Guardando el valor del selector de tipo
//   const filterType = window.dataManager.filterByType(data,typeValue); //llamando la funcion desde el objeto global window para filtrar tipos
//   printData(filterType); // Reutilizando la funcion para imprimir por tipo sobre las tarjetas
// };

}
