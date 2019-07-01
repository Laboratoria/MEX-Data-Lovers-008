//Esto ya estaba en el documento
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example;
//---------------------------------------------------------------
const firstButton = document.getElementById("principalButton");
const name = document.getElementById("name");
const img = document.getElementById("img");
const type = document.getElementById("type");
const height = document.getElementById("height");
const weight= document.getElementById("weight");
const candy =  document.getElementById("candy");
const candy_count = document.getElementById("candy_count");
const egg = document.getElementById("egg");
const spawn_chance = document.getElementById("spawn_chance");
let contador = 0;

// const showName = () => {
//   p1.innerHTML += window.pokemon.POKEMON.pokemon[2];
// }
firstButton.addEventListener("click", () => {
  name.innerHTML = "Nombre:" + " " + window.pikachu.pokemon[contador].name;
  img.src = window.pikachu.pokemon[contador].img;
  type.innerHTML="Tipo:" + " " +  window.pikachu.pokemon[contador].type;
  height.innerHTML="Altura:" + " " + window.pikachu.pokemon[contador].height;
  weight.innerHTML="Ancho:" + " " +  window.pikachu.pokemon[contador].weight;
  candy.innerHTML ="Caramelo:" + " " +  window.pikachu.pokemon[contador].candy;
  candy_count.innerHTML = "Caramelos para evolucionar:" + " " + window.pikachu.pokemon[contador].candy_count;
  egg.innerHTML = "Egg:" + " " + window.pikachu.pokemon[contador].egg;
  spawn_chance.innerHTML = "spawn_chance:" + " " + window.pikachu.pokemon[contador].egg;
  contador=contador+1;
})


