// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example

//descomentar para mostrar data//
const root = document.getElementById('root')


const data = RICKANDMORTY.results
let str = ''
data.forEach(element => {
  let name = element.name
  let origin = element.origin.name
  let species = element.species
  let image = element.image
  let status = element.estatus
  let gener = element.gener
  str +=  `<div class="fondo">
  <h3 class = "prueba">${name}</h3>
  <p class="prueba">${origin}</p>
  <p>${species}</p>
  <img src=${image} alt="">
  <p> ${status}</p>
  <p> ${gener}</p>
</div>`

});

//llamar botones de nombre//
function GuardarValor()
{
  document.getElementById("receive-name").value = document.getElementById("input-name").value;
}

root.innerHTML = str
