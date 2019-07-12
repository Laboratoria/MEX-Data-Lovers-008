// //aquí van las funciones de filtrados
// window.pokemons = {
//   // Esta funcion filtra todos los pokemones por el tipo
//   filterByType: (allPokemon, condition) => {
//       let filtered = [];
//       for (let i = 0; i < allPokemon.length; i++){
//           for (let e = 0; e < allPokemon[i].type.length; e++) {
//               if(allPokemon[i].type[e] === condition){
//                   filtered.push(allPokemon[i]);
//               }
//           }
//       }
//       return filtered;
//   },

//Esta función ordena los pokemones de A-Z
const sortData = (data) => {
  data.sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
          return -1;
      }
      if (nameA > nameB) {
          return 1;
      }
  });
  return data;
};

//Esta función ordena los pokemones de Z-A
const sortDataZA = (data) => {
  data.sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
          return -1;
      }
      if (nameA > nameB) {
          return 1;
      }
  });
  return data.reverse();
};

window.sortData = sortData;
window.sortDataZA = sortDataZA;



//--------------------------------------------------------------
//Función para filtrar por tipo de Pokemon 

const filterByType = (data, condition) => {
  let conditionTrue = data.filter(pokemon => pokemon.type[0] == condition || pokemon.type[1] == condition || pokemon.type[2] == condition);

  return conditionTrue;
}

window.filterByType = filterByType;

//----------------------------------------------------------------
//Funciones para estadisticas reduce 
// const score = 0;
// const calculate = (data, condition) => {
//   let conditionTrue = data.reduce(pokemon => pokemon.type[0] == condition || pokemon.type[1] == condition || pokemon.type[2] == condition);
//   if(conditionTrue == true){
//     score = score + 1;
//   }

//   return score;
// }

// window.calculate = calculate;
//----------------------------------------------------------------