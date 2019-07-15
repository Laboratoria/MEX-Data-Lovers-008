
const personajes = RICKANDMORTY.results;
// const data RICKANDMORTY.results
const paraPintar = document.getElementById ('data'); 
// console.log(personajes)
//MOSTRAR 

//Para eliminar espacios y caracteres
function getCleanedString(filter){
  // Definimos los caracteres que queremos eliminar
  var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.ζáéíóúÁÉÍÓÚü´'" ;
  
  // Los eliminamos todos
  for (var i = 0; i < specialChars.length; i++) {
    filter= filter.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
  }   
  
  // Lo queremos devolver limpio en minusculas
  filter = filter.toLowerCase();
  
  // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
  filter = filter.replace(/ /g,"_");
  console.log(filter);
  return filter;
}

const muestraData = () => {
  let str = '';
  personajes.forEach(element => {
    //let species= getCleanedString(element.species);
    let origin= getCleanedString(element.origin.name);
    str += `<div class="tarjeta ${element.species} ${origin}">
    <div class= "caras">
    <div class="nombre">
    <p> ${element.name}</p></div>
    <br>
    <div class="img"> 
    <img src="${element.image}"></img>
    </div>
 <div class= "info" style= "display: none">
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


//FILTRAR
























/*Filtrar
const filtrarData = (prop, val) => {
  let str = '';
  personajes.forEach(element => {
    
    //console.log(element[prop])
    
    if(element[prop] == val) {
      str += `<div class="tarjeta">
          <div class="nombre">
          <p> ${element.name}</p></div>
          <br>
          <div class="img"> 
            <img src="${element.image}"></img>
          </div>
          <div class= "info" style= "display: none">
          <p> Status: ${element.status} </p>
          <p> Especie: ${element.species} </p>
          <p> tamaño: ${element.origin.name} </p>
          <p> Origen: ${element.location.name}</p>
          </div>
          </div>`  
    }
    
    
  });


  // console.log(str);

}
filtrarData('status', 'Alive')*/
