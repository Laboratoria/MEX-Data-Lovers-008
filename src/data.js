//Función de filtrado
const filterData = (data, key, value) => {
  let filterResult = data.filter(element => element[key] === value);    
  console.log(key);
  console.log(value);
  console.log(filterResult);
  return filterResult;
};

//Función de ordenamiento. sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.
const sortDataAZ = (data) => {
  data.sort((a,b) => {
    let nameA = a.name.toUpperCase();//iguala valores de las letras a comparar
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return data;
};

const sortDataZA = (data) => {
  data.sort((a,b) => {
    let nameA = a.name.toUpperCase();//iguala valores de las letras a comparar
    let nameB = b.name.toUpperCase();
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
    return 0;
  });
  return data;
};

window.filterData = filterData;
window.sortDataZA = sortDataZA;
window.sortDataAZ = sortDataAZ;
  
/*sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});*/


//computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.

