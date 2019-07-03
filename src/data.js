// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example

const root = document.getElementById('root')


const data = RICKANDMORTY.results
let str = ''
data.forEach(element => {
  let name = element.name
  let origin = element.origin.name
  let species = element.species
  let image = element.image
  str +=  `<div class="fondo">
  <h3 class = "prueba">${name}</h3>
  <p class="prueba">${origin}</p>
  <p>${species}</p>
  <img src=${image} alt="">
</div>`


});



root.innerHTML = str
