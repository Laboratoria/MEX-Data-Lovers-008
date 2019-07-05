
for(personajes in RICKANDMORTY.results){ 
  // console.log(RICKANDMORTY.results[personajes].image); 
  //console.log(RICKANDMORTY.results[personajes].gender); 

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




}
