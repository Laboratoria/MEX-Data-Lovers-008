// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
// const example = () => {
//   return 'example';
// };
// FUNCION FILTRAR

let filtrar = (data,condicion) => {
  let filtro = data.filter(pokemon => {
    for( let i = 0; i < pokemon.type.length; i++){
      if (pokemon.type[i] === condicion){
        return true;
      }
    }
    return false;
  });
  return filtro;
}
window.filtrar = filtrar;
// window.example = example;