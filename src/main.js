
for(personajes in RICKANDMORTY.results){ 
  // console.log(RICKANDMORTY.results[personajes].image); 
  //console.log(RICKANDMORTY.results[personajes].gender); 

for(personajes in RICKANDMORTY.results){
  // console.log(RICKANDMORTY.results[personajes].image);


for(personajes in RICKANDMORTY.results){
  // console.log(RICKANDMORTY.results[personajes].image); 
  //console.log(RICKANDMORTY.results[personajes].gender);

}
}
}
const data = RICKANDMORTY.results;
// const data RICKANDMORTY.results
const paraPintar = document.getElementById ('data');

//filtrar data

const muestraData = () => {
  let str = '';
  data.forEach(element => {
    str += `<div class="tarjeta">
    <div class= "caras">
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
    <p> Origen: ${element.location.name}</p>
    </div>
    </div>
    </div>`
  });

  paraPintar.innerHTML = str;

}
muestraData();


//Filtrar
const filtrarData = (prop, val) => {
  let str = '';
  data.forEach(element => {
    
    //console.log(element[prop])
    
    if(element[prop] == val) {
      str += `<div class="tarjeta">
          <div class="nombre">
          <p> ${element.name}</p></div>
          <br>
          <div class="img" id="img"> 
          <img src="${element.image}"></img>
          </div>
       <div class= "info" id="info">

          <p> Status: ${element.status} </p>
          <p> Especie: ${element.species} </p>
          <p> tamaño: ${element.origin.name} </p>
          <p> Origen: ${element.location.name}</p>
          </div>
          </div>`  
    }
    
    
  });


  console.log(str);

}
filtrarData('status', 'Alive')
