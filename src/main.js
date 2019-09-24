let information= document.getElementById("contenido-cards");
const showPokemon = window.data.show(POKEMON.pokemon);//llamando data de archivo data.js
const select = document.getElementById("select-type-pokemon");
const orderPokemon = document.getElementById("select-order"); //llamando boton select de orden


let printCards = (showPokemon) => {
  let string = "";
  showPokemon.forEach(element => {
    
    string += `<div class="tarjetas">
    <img src="${element.image}">
    <p id="num" >No. ${element.number}</p>
    <p id= "nombre">${element.name}</p>
    <p id= "tipo">${element.type}</p>
    <p id="debilidad">Debilidad: ${element.debility}</p>
  </div>`;
  });
  information.innerHTML = string;
//console.log(printCards);
};
printCards(showPokemon);

//filtrado por tipo

// let arrayType = (showPokemon) => {
//   const newArray = showPokemon.filter(pokemon => pokemon.type[0] == select.value);
  
//   if(select.value == "Todos") {
//     printCards(showPokemon);
    
//   }else{
//     printCards(newArray); 
//   }
// };

let arrayType = (showPokemon) => {
  const newArray = window.data.filterData(showPokemon, select.value);
  
  if(select.value == "Todos") {
    printCards(showPokemon);
    
  }else{
    printCards(newArray); 
  }
};


//orden A-Z
let changeOrder = (showPokemon) => {
  let selectOrder = orderPokemon.value;
  const alfabetic = window.data.sortData(showPokemon,selectOrder);
  
  printCards(alfabetic);
};



select.addEventListener("change", () => {
  arrayType(showPokemon);
});
orderPokemon.addEventListener("change", () => {
  changeOrder(showPokemon);
});

//calculo de pokemones

// const numberPok = (showPokemon) => {
//   const totalType = type.length;
//   const numberType = (showPokemon.filter(pokemon => pokemon.type === "Grass")).length;
//   console.log(numberType);
  
//   console.log(totalType);
// }
// console.log(numberPok)

//const numberPok = showPokemon.find(showPokemon => showPokemon.type === "Grass");
//console.log(numberPok);


// const sortData = (showPokemon) => {
  
//   if(orderPokemon.value == "A") { //Se utilza if para indicarle que cuan inicie con A aplique el orden A-Z
//     console.log(showPokemon.sort((a,b) => {a.name.localeCompare(b.name)}));
    
//   } else if(orderPokemon.value == "Z") {
//     console.log(showPokemon.sort((a,b) => {b.name.localeCompare(a.name)}));
//   }
  
//   printCards(sortData);
// }

// orderPokemon.addEventListener("change", () => {
//   sortData(showPokemon)
// })


// const changeOrder = (showPokemon) =>{
//   const alfabeticA = showPokemon.sort((a,b) =>{
//     return a.name.localeCompare(b.name);
//   });
//   console.log(alfabeticA);

//   const alfabeticZ = showPokemon.sort ((a,b) => {
//     return b.name.localeCompare(a.name);
//   });
//   console.log(alfabeticZ);
// };
// changeOrder(showPokemon);


// const newPasto = showPokemon.filter(pokemon => pokemon.type.includes("Flying"));
// console.log(newPasto)

// const changeOrden = (showPokemon) =>{
//   const numberMayor = showPokemon.reverse();
//   console.log(numberMayor);
// }
// changeOrden(showPokemon);


// //Funcion para filtrar por tipo
//const pasto= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Grass"));
//console.log(pasto)
// const insecto= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Bug"));
// //console.log(insecto)
// const hielo= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Ice"));
// //console.log(hielo)
// const suelo= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Ground"));
// //console.log(suelo)
// const lucha= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Fighting"));
// //console.log(lucha)
// const hada= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Fairy"));
// //console.log(hada)
