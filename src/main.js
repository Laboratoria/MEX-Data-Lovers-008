// for(personajes in RICKANDMORTY.results){
//   console.log(RICKANDMORTY.results[personajes].image);
// }
// console.log(RICKANDMORTY.results[0].image);

// for(personajes in RICKANDMORTY.results){
//   console.log(RICKANDMORTY.results[personajes].name);
// }
//  console.log(RICKANDMORTY.results [1].image);

  
// });


// const data = window.RICKANDMORTY.results;


for(personajes in RICKANDMORTY.results){
  // console.log(RICKANDMORTY.results[personajes].image);
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


