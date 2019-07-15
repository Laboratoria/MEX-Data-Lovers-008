// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


//const example = () => {
    //return 'example';
    //};
    
    //window.example = example;

//FUNCIÓN PARA FILTRAR POR TIPOS DE POKÉMON //
       
const filterBy = (data, condition) => { /* Función para filtrar los pokemones por tipos */
    const filterbytype = data.filter(element => {
        for (let i = 0; i < element.type.length; i++) {
            if (element.type[i] === condition) {
                return 1;
              }
          }
      });
      return filterbytype;
    };
    
window.filterBy = filterBy;

//FUNCIÓN PARA ORDENAR DE LA A-Z Y Z-A//
const sorData = (dataPokemon, sortBy, sortOrder) => {
  let pokemonOrder = [];
  switch (sortOrder) {
      case 'ASC': //  Ordenar de manera ascedente
          if (sortBy === 'name') {
              pokemonOrder = dataPokemon.sort((a, b) => (a.name > b.name ? 1 : -1));
          }
          break;

      case 'DESC': // Ordenar de manera descendente
          if (sortBy === 'name') {
              pokemonOrder = dataPokemon.sort((a, b) => (a.name < b.name ? 1 : -1));
          }
          break;
    
  }
  return pokemonOrder;
};

window.sorData = sorData;

//  FUNCIÓN PARA PESO PROMEDIO DE POKÉMONES //

window.computeStats = {
    statsPromedy: (data, stats) => {
        let finalResult;
        let sumWeight = 0;
        data.forEach((data) => {
            const number = data[stats];
            const onlyNumber = number.split(" ");
            sumWeight += parseFloat(onlyNumber);
        });

        finalResult = sumWeight / data.length;
        return finalResult.toFixed(2);
    },
};


