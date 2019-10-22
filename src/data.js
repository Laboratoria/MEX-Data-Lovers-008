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

//----------------------------------------------------------------

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
// Esta función se encarga del estadístico 
const statisticsPercentage = (key, value, data) => {
  let total = data.length;
  let items = data.filter(element => element[key].indexOf(value) > -1);
  let result = (items.length * 100) / total;
  let trunc = Math.floor(result);
  return trunc;
};

//--------------------------------------------------------------
// Función que filtra por tipo de pokemon
const filterByType = (data) => {
  const idTarget = event.target.id;
  let items = data.filter(element => element.type[0] === idTarget || element.type[1] == idTarget || element.type[2] == idTarget);
  return items;
};

window.sortData = sortData;
window.sortDataZA = sortDataZA;
window.filterByType = filterByType;
window.statisticsPercentage = statisticsPercentage;
