// let cardGeneral= document.getElementById("cardGeneral");
// cardGeneral.insertAdjacentHTML("afterbegin",  `<section id="prueba"></section>`);

const prueba = document.getElementById('prueba');

const result = window.data.championSearch(LOL.data);
const boton = document.getElementById("eliminar");
const boton2 = document.getElementById("seaForName");
const change1 = document.getElementById('champFilter');
const change2 = document.getElementById('filterRol');
const change3 = document.getElementById('filterRol2');


<<<<<<< HEAD
const volverpintar =(results) => {
  results.forEach(element => {
=======

function volverpintar () {
  result.forEach(element => {
>>>>>>> 7c67ce3af5e1948b798a68fb0297f3095fd44e02
    card =`<div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src="${element.splash}" class="i">
    </div>
    <div class="flip-card-back">
    <h1 style="color:#9d7f43;">${element.name}</h1> 
    <h4 style="color:#9d7f43;">"${element.title}"</h4> 
    <p id="tags" class="p">${element.tags}</p>
    <p class="p">Ataque: ${element.info.attack} ~~ Defensa: ${element.info.defense}</p>
    <p  class="p">Magia: ${element.info.magic} ~~ Dificultad: ${element.info.difficulty}</p>
     <p class="p" >Vida:  ${element.stats.hp} ~~ Mana: ${element.stats.mp}</p>
     <p class="p" >Regen. de vida:  ${element.stats.hpregen} ~~ Vida por nivel:  ${element.stats.hpperlevel}</p>
    <p  class="p" >Vel de mov.:  ${element.stats.movespeed} ~~ Vel. de ataque:  ${element.stats.attackspeedoffset}</p>
    <p id="attackdamage" class="p" >Daño de ataque:  ${element.stats.attackdamage}</p>
    </div>
    </div>
    </div>`

    prueba.insertAdjacentHTML("beforeend", card);
  });
  return volverpintar;
};


const borrar = () =>{
  document.getElementById("prueba").innerHTML=""
};



const orden = () =>{
  let val=change3.value;
  let newArray;

  borrar();
  const result1 = window.data.championSearch(LOL.data);
  if(val==='D'){
    newArray=result1.reverse()
    volverpintar(newArray);
  }else if(val==='A'){
    newArray=result1;
    volverpintar(newArray);
  }

};

const buscarNombre = () =>{

  let valorabuscar = document.getElementById('buscName').value;
  let newArray = result.filter(function (el) {
    return el.name.toLowerCase().indexOf(valorabuscar) !== -1;
  });
  borrar();
  volverpintar(newArray);

};

const rol = () =>{
  let valorabuscar = document.getElementById('filterRol').value;
  let newArray = result.filter(function (el) {
    return el.tags.indexOf(valorabuscar) !== -1;

  });
  borrar();
  volverpintar(newArray);

};

boton.addEventListener("click",borrar);
boton2.addEventListener("click",buscarNombre);
// change1.addEventListener("change",mejoresCampeones);
change2.addEventListener("change",rol);
change3.addEventListener("change",orden);



<<<<<<< HEAD
=======

>>>>>>> 7c67ce3af5e1948b798a68fb0297f3095fd44e02
