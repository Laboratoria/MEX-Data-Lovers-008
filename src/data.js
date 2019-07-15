//Función de filtrado
const filterData = (data, key, value) => {
  let filterResult = data.filter(element => element[key] === value);    
  console.log(key);
  console.log(value);
  console.log(filterResult);
  return filterResult;
};

//Funciones de ordenamiento por nombre A-Z y Z-A
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

//FUNCIÓN PENDIENTE computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.

//Declara métodos globales
window.filterData = filterData;
window.sortDataZA = sortDataZA;
window.sortDataAZ = sortDataAZ;
