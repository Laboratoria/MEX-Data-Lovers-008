const data = RICKANDMORTY.results;
//console.log(data);

let printDataPersonajes = () => {
let str = "";
data.forEach(element => {
  let image = element.image;
  let name = element.name;
  let species = element.species;
  let gender = element.gender;
  let origin = element.origin.name
  let status = element.status;
  str += `<div class="card-personajes">
  <img src=${image} alt="">
  <h3>${name}</h3>
  <p>Especie: ${species}</p>
  <p>Género: ${gender}</p>
  <p>Origen: ${origin}</p>
  <p>Estatus: ${status}</p>
</div>`
});
document.getElementById("card-personajes").innerHTML = str;
}
printDataPersonajes();




