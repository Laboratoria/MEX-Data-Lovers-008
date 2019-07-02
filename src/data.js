//Esto ya estaba en el documento
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example;
//---------------------------------------------------------------
const allPokemones = document.getElementById("allPokemones");

const firstButton = document.getElementById("siguiente");
const buttonAtras = document.getElementById("atras");
const name = document.getElementById("name");
const img = document.getElementById("img");
const type = document.getElementById("type");
const height = document.getElementById("height");
const weight= document.getElementById("weight");
const candy =  document.getElementById("candy");
const candy_count = document.getElementById("candy_count");
const egg = document.getElementById("egg");
const spawn_chance = document.getElementById("spawn_chance");
const avg_spawns = document.getElementById("avg_spawns");
const spawn_time = document.getElementById("spawn_time");
const multipliers = document.getElementById("multipliers");
const weaknesses = document.getElementById("weaknesses");
const next_evolution = document.getElementById("next_evolution");
let contador = 0;


firstButton.addEventListener("click", () => {
  name.innerHTML = "Nombre:" + " " + window.pikachu.pokemon[contador].name;
  img.src = window.pikachu.pokemon[contador].img;
  type.innerHTML="Tipo:" + " " +  window.pikachu.pokemon[contador].type;
  // height.innerHTML="Altura:" + " " + window.pikachu.pokemon[contador].height;
  // weight.innerHTML="Ancho:" + " " +  window.pikachu.pokemon[contador].weight;
  candy.innerHTML ="Caramelo:" + " " +  window.pikachu.pokemon[contador].candy;
  // candy_count.innerHTML = "Caramelos para evolucionar:" + " " + window.pikachu.pokemon[contador].candy_count;
  // egg.innerHTML = "Egg:" + " " + window.pikachu.pokemon[contador].egg;
  // spawn_chance.innerHTML = "spawn_chance:" + " " + window.pikachu.pokemon[contador].egg;
  // avg_spawns.innerHTML = "avg_spawns:" + " " + window.pikachu.pokemon[contador].avg_spawns;
  // spawn_time.innerHTML = "spawn_time:" + " " + window.pikachu.pokemon[contador].spawn_time;
  weaknesses.innerHTML = "Debilidades:" + " " + window.pikachu.pokemon[contador].weaknesses;
  contador=contador+1;
})


buttonAtras.addEventListener("click", () => {
  name.innerHTML = "Nombre:" + " " + window.pikachu.pokemon[contador].name;
  img.src = window.pikachu.pokemon[contador].img;
  type.innerHTML="Tipo:" + " " +  window.pikachu.pokemon[contador].type;
  // height.innerHTML="Altura:" + " " + window.pikachu.pokemon[contador].height;
  // weight.innerHTML="Ancho:" + " " +  window.pikachu.pokemon[contador].weight;
  candy.innerHTML ="Caramelo:" + " " +  window.pikachu.pokemon[contador].candy;
  // candy_count.innerHTML = "Caramelos para evolucionar:" + " " + window.pikachu.pokemon[contador].candy_count;
  // egg.innerHTML = "Egg:" + " " + window.pikachu.pokemon[contador].egg;
  // spawn_chance.innerHTML = "spawn_chance:" + " " + window.pikachu.pokemon[contador].egg;
  // avg_spawns.innerHTML = "avg_spawns:" + " " + window.pikachu.pokemon[contador].avg_spawns;
  // spawn_time.innerHTML = "spawn_time:" + " " + window.pikachu.pokemon[contador].spawn_time;
  weaknesses.innerHTML = "Debilidades:" + " " + window.pikachu.pokemon[contador].weaknesses;
  contador=contador-1;
})


