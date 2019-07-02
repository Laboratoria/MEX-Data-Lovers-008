//Manipulating with DOM

//Seleccionando a los elementos del HTML con ayuda de su Id.
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


// Funciones puras 
// Esta función sirve para que al darle click a un botón pueda mostar a los pokemones de uno en uno. El contador avanza en 1 por cada click.
const showOnexOne = () => {
  img.src = window.pikachu.pokemon[contador].img;
  type.innerHTML="Tipo:" + " " +  window.pikachu.pokemon[contador].type;
  name.innerHTML = "Nombre:" + " " + window.pikachu.pokemon[contador].name;
  candy.innerHTML ="Caramelo:" + " " +  window.pikachu.pokemon[contador].candy;
  weaknesses.innerHTML = "Debilidades:" + " " + window.pikachu.pokemon[contador].weaknesses;
  contador=contador+1;
}

// Esta función sirve para que al darle click a un botón "atrás" pueda mostar a los pokemones de uno en uno pero en reversa. El contador disminuye en 1 por cada click.
const showOnexOneReverse = () => {
  img.src = window.pikachu.pokemon[contador].img;
  type.innerHTML="Tipo:" + " " +  window.pikachu.pokemon[contador].type;
  name.innerHTML = "Nombre:" + " " + window.pikachu.pokemon[contador].name;
  candy.innerHTML ="Caramelo:" + " " +  window.pikachu.pokemon[contador].candy;
  weaknesses.innerHTML = "Debilidades:" + " " + window.pikachu.pokemon[contador].weaknesses;
  contador=contador-1;
}


//Llamando a las funciones
firstButton.addEventListener("click", showOnexOne);
buttonAtras.addEventListener("click", showOnexOneReverse);

//--------------------------------------------------------
// funcion que imprime toda la data en la section1
let imprimir = () => {
  //llamar section donde se imprime la data
  let mostrar = document.getElementById('mostrando_lista_pokemones');
  mostrar.innerHTML = '';
  let template='';
for(let pokemon of POKEMON.pokemon){
  //mostrar.innerHTML += `<ul><li>
  template +=`<li>
  <img src="${pokemon.img}">
  <p><strong>Numero:</strong>${pokemon.num}</p>
  <p><strong>Nombre:</strong> ${pokemon.name}</p>
  </li> `
}
mostrar.innerHTML=`<ul>${template}</ul>`
}
imprimir();