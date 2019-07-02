for(personajes in RICKANDMORTY.results){
  
  // console.log(RICKANDMORTY.results[personajes].image);
  
  console.log(RICKANDMORTY.results[personajes].gender);
  
}
const data = RICKANDMORTY.results
// const data RICKANDMORTY.results
const paraPintar = document.getElementById ('data');

const muestraData = () => {
  let str = '';
  data.forEach(element => {
    console.log(element)
    str += `<div class="datos">
    <img src="${element.image}"></img>
    <p> ${element.name}</p>
    <p> Status: ${element.status} </p>
    <p> Especie: ${element.species} </p>
    <p> tamaño: ${element.origin.name} </p>
  </div>`
  });

  paraPintar.innerHTML = str;

}

muestraData()
// printdata();

