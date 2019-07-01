//Esto ya estaba en el documento
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example;
//---------------------------------------------------------------
var firstButton = document.getElementById("principalButton");
var p1 = document.getElementById("p1");
let contador = 0;

// const showName = () => {
//   p1.innerHTML += window.pokemon.POKEMON.pokemon[2];
// }
firstButton.addEventListener("click", () => {
  p1.innerHTML = window.pikachu.pokemon[contador].name;
  contador = contador+1;
})


