const data = POKEMON.pokemon;

//Seleccionando a los elementos del HTML con ayuda de su Id.
const firstButton = document.getElementById("siguiente");
const buttonAtras = document.getElementById("atras");
const hamburguesa = document.getElementById("hamburguesa")
const opciones = document.getElementById("opciones")
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
const container=document.getElementById("container");
const pokeboll=document.getElementById("pokeboll");
const input=document.getElementById("input");
const buscar=document.getElementById("buscar");
const todos=document.getElementById("todos");
let newData = [];
let contador = 0;

// Funciones puras
// Esta función sirve para que al darle click a un botón pueda mostar a los pokemones de uno en uno. El contador avanza en 1 por cada click.
const showOnexOne = () => {
 name.innerHTML = "nombre:" + " " + window.pikachu.pokemon[contador].name;
 img.src = window.pikachu.pokemon[contador].img;
 contador=contador+1;
}

// Esta función sirve para que al darle click a un botón "atrás" pueda mostar a los pokemones de uno en uno pero en reversa. El contador disminuye en 1 por cada click.
const showOnexOneReverse = () => {
 name.innerHTML = "nombre:" + " " + window.pikachu.pokemon[contador].name;
 img.src = window.pikachu.pokemon[contador].img;
 contador=contador-1;
}


//Llamando a las funciones
firstButton.addEventListener("click", showOnexOne);
buttonAtras.addEventListener("click", showOnexOneReverse);


let numero=0;
const numerodepokemones=document.getElementById("numerodepokemones");
const porcentajedepokemones=document.getElementById("porcentajedepokemones");
const estadisticas=document.getElementById("estadistica");
//--------------------------------------------------------
// funcion que imprime toda la data en la section1
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
 </li> `
}
mostrar.innerHTML=`<ul>${template}</ul>`
numero=data.length;
numerodepokemones.innerHTML=`${numero} de 151 pokemones`;
porcentajedepokemones.innerHTML=`${numero/151*100}% de los pokemones`;
}
imprimir(data);

//----------------------------------------------------------------
//Función para filtrar

const busqueda = () => {
 let nombre=input.value;
 newData = data.filter(pokemon => pokemon.name.toLowerCase() == nombre.toLowerCase());
 imprimir(newData);
}
buscar.addEventListener("click",busqueda);

const mostrartodosdenuevo = () =>{
 imprimir(data);
}

todos.addEventListener("click",mostrartodosdenuevo);

//----------------------------------------------------------
//ULTIMA PRUEBA - FILTRAR POR TIPO DE POKEMON


const btnPok = document.getElementsByClassName("btnPok");

const filtrar=()=>{
 for(let index = 0; index < btnPok.length; index++){
   btnPok[index].addEventListener("click", () => {
     console.log(btnPok[index])
     const idTarget = event.target.id;
     const newArray = data.filter(pokemon => pokemon.type[0] == idTarget || pokemon.type[1] == idTarget || pokemon.type[2] == idTarget)
     newData = newArray;
     console.log(newData)
     imprimir(newData);
   })
 }
}
filtrar();
 //----------------------------------------------------
 //FUNCION PARA ORDENAR DE A-Z
 const btnAZ = document.getElementById("enlace");

 const orderAZ = () => {
   let result = window.sortData(data);
   // newDataAZ = result;
   imprimir(result);
 }

 btnAZ.addEventListener("click", orderAZ);

 //------------------------------------------------------
 //LLAMANDO A LA FUNCIÓN SORTDATAZA PARA ORDENAR DE Z-A
 const btnZA = document.getElementById("orderZ_A");


 const orderZA = () => {
   let result = window.sortDataZA(data);
   // newDataAZ = result;
   imprimir(result);
 }

 btnZA.addEventListener("click", orderZA);

 //----------------------------------------------------------

function cargando(){
 container.classList.remove("ocultar");
 pokeboll.classList.add("ocultar");
};
 setTimeout ("cargando()", 3000);

const conocertodos=document.getElementById("conocertodos");
const todospokemones=document.getElementById("todospokemones");

function mostrartodos(){
 todospokemones.classList.remove("ocultar");
 todospokemones.classList.add("lista_de_pokemones");
 container.classList.add("ocultar");
 estadisticas.classList.remove("ocultar");

};

conocertodos.addEventListener("click",mostrartodos);
