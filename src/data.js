const filterData = (data, key, value) => {
  let filterResult = data.filter(element => element[key] === value);    
  console.log(key);
  console.log(value);
  console.log(filterResult);
  return filterResult;
};

window.filterData = filterData;

//sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.
// const ordenarData = () => {
//   //let newArray = [data];
//   //console.log(newArray)
//   data.sort((a, b) => {
     
//   }
  
//   )
//   return ordenarData;
//   };
//   ordenarData();
  
//computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.



