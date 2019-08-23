const data = window.POKEMON.pokemon;

//----------------------------------------------------------
// Consumiendo la API
// const consultarPokemon = (id) => {
//     //funcion extraer data api
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then(function(response){
//       response.json()
//       .then(function(pokemon){
//         console.log(pokemon.name);
//       })
//     })
// }
// consultarPokemon();
//----------------------------------------------------------

//Seleccionando a los elementos del HTML con ayuda de su Id.
const firstButton = document.getElementById("siguiente");
const buttonAtras = document.getElementById("atras");
const name = document.getElementById("name");
const img = document.getElementById("img");
const container=document.getElementById("container");
const conocertodos = document.getElementById("conocertodos");
const todospokemones = document.getElementById("todospokemones");
let contador = 0;
//Estadístico
let numero=0;
const numerodepokemones=document.getElementById("numerodepokemones");
const porcentajedepokemones=document.getElementById("porcentajedepokemones");
const estadisticas=document.getElementById("estadistica");
//  Buttons for pokemons type
const btnIce = document.getElementById("Ice");
const btnFire = document.getElementById("Fire");
const btnWater = document.getElementById("Water");
const btnGrass = document.getElementById("Grass");
const btnPsychic = document.getElementById("Psychic");
const btnRock = document.getElementById("Rock");
const btnElectric = document.getElementById("Electric");
const btnBug = document.getElementById("Bug");
const btnFlying = document.getElementById("Flying");

//-----------------------------------------------------------------------
// Función para mostrar a los pokemones de uno en uno
const showOnexOne = () => {
 name.innerHTML = "nombre:" + " " + window.POKEMON.pokemon[contador].name;
 img.src = window.POKEMON.pokemon[contador].img;
 contador=contador+1;
};

// Función para retroceder en la visualización de los pokemones uno x uno
const showOnexOneReverse = () => {
 name.innerHTML = "nombre:" + " " + window.POKEMON.pokemon[contador].name;
 img.src = window.POKEMON.pokemon[contador].img;
 contador=contador-1;
};
//-----------------------------------------------------------------------

// Función que imprime la data en section1
const imprimir = (data) => {
 //llamar section donde se imprime la data
 const mostrar = document.getElementById('mostrando_lista_pokemones');
 mostrar.innerHTML = '';
 let template='';
for(let pokemon of data){
 //mostrar.innerHTML += `<ul><li>
 template +=`<li>
 <img src="${pokemon.img}">
 <p><strong>Nombre:</strong> ${pokemon.name}</p>
 <p><strong>Tipo:</strong>${pokemon.type}</p>
 <p><strong>Candy:</strong>${pokemon.candy}</p>
 </li> `;
}
mostrar.innerHTML=`<ul>${template}</ul>`;
numero=data.length;
numerodepokemones.innerHTML=`${numero} de 151 pokemones`;
porcentajedepokemones.innerHTML=`${numero/151*100}% de los pokemones`;
};
imprimir(data);

//----------------------------------------------------------------

//Función que ordena la data de A-Z
 const btnAZ = document.getElementById("enlace");

 const orderAZ = () => {
   let result = window.sortData(data);
   // newDataAZ = result;
   imprimir(result);
 };

 btnAZ.addEventListener("click", orderAZ);

//----------------------------------------------------------------

//Función que ordena la data de Z-A
 const btnZA = document.getElementById("orderZ_A");

 const orderZA = () => {
   let result = window.sortDataZA(data);
   // newDataAZ = result;
   imprimir(result);
 };

 btnZA.addEventListener("click", orderZA);

 //----------------------------------------------------------
 //Función que filtra por tipo, llama a la función pura filterByType
 const filter = () => {
  let result = window.filterByType(data);
  imprimir(result);
};
 //----------------------------------------------------------
//Función que muestra todos los pokemons y el estadistico
 const mostrartodos = () => {
 todospokemones.classList.remove("ocultar");
 todospokemones.classList.add("lista_de_pokemones");
 container.classList.add("ocultar");
 estadisticas.classList.remove("ocultar");
};

//**************************************************
//PROBANDO CON EL SELECT
// let imSelection = document.getElementById("select-type");
// imSelection.addEventListener("click", () => {
// let imValue = imSelection.options[imSelection.selectedIndex].value;
// //console.log(typeof imValue);
// //console.log(imValue);
// let pokeFilterData = window.data.filterByType(data, imValue);
// imprimir(pokeFilterData);
// });

//----------------------------------------------------------
//Llamando a las funciones
firstButton.addEventListener("click", showOnexOne);
buttonAtras.addEventListener("click", showOnexOneReverse);
//Conocer a todos los pokemones
conocertodos.addEventListener("click",mostrartodos);
//Buttons for pokemon type
btnIce.addEventListener("click", filter);
btnFire.addEventListener("click", filter);
btnWater.addEventListener("click", filter);
btnGrass.addEventListener("click", filter);
btnPsychic.addEventListener("click", filter);
btnRock.addEventListener("click", filter);
btnElectric.addEventListener("click", filter);
btnBug.addEventListener("click", filter);
btnFlying.addEventListener("click", filter);
