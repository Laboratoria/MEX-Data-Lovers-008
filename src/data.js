// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  console.log(RICKANDMORTY)
  return 'example';
};
console.log(RICKANDMORTY)
window.example = example;