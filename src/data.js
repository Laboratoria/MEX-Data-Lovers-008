// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;


for (let i = 0; i < RICKANDMORTY.results.length; i++){
  console.log(RICKANDMORTY.results[i].name)

}

