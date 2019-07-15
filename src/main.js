//---- Mostrar la data ----/
const data = window.POKEMON.pokemon; //Extraer data de la variante POKEMON y el objeto "pokemon"
const showCard = document.getElementById("data"); //Mostrar la data en el div id="data"

const pickType = document.getElementById("pick-type");

const pickSort = document.getElementById("pick-sort");
let valueSort = pickSort.value;

const manipulateData = data => {
  let str = ""; //Extraer objetos del array que vamos a ocupar
  //Extraer c/u de los elementos que queremos mostrar
  data.forEach(element => {
    str += `<div class="poke-card">
    <div class="poke-card-inner">
      <div class="poke-card-front">
      <p id="p-number">#${element.num}</p>
      <h3 id="p-name">${element.name}</h3>
      <p id="p-type">${element.type}</p>
    <img
      src="${element.img}"
      alt="${element.name}"
      id="p-img"
      style="width:48%"
    />
      </div>
      <div class="poke-card-back">
    <h3 id="p-number">#${element.num}</h3>
    <h3 id="p-name">${element.name}</h3>
      <p id="p-type">${element.type}</p>
      <div class="can-weak>
        <p id="p-candy">Caramelos<br><strong>${element.candy_count}</strong></p>
        <p id="p-weaknesses">Debilidades<br><strong>${
          element.weaknesses
        }</strong></p>
      </div>
      <div class="height-weight">
        <p id="p-height">Altura<br><strong>${element.height}</strong></p>
        <p id="p-weight">Peso<br><strong>${element.weight}</strong></p>
      </div>
      </div>
    </div>
  </div>`;
  });
  showCard.innerHTML = str;
};
manipulateData(data);

//---Menú Hamburquesa---//
const buttonMenu = document.getElementById("icon-menu");
const principalMenu = document.getElementById("nav");
// const buttonMenuClose = document.getElementById("icon-menu-close");

buttonMenu.addEventListener("click", showMenu);
// buttonMenuClose.addEventListener("click" , closeMenu);

//---- Filtrar data ----//
pickType.addEventListener("change", () => {
  const valueType = pickType.value;
  const newArrayPokemon = data.filter(pokemon => pokemon.type[0] == valueType);
  manipulateData(newArrayPokemon);
});

//---- Ordenar data ----//
const sortData = data.sort((a, b) => {
  //parámetros necesarios en sort (a,b) siempre
  let aName = a.name.toLowerCase(); // convertir a minúsculas todas las letras
  let bName = b.name.toLowerCase();

  if (aName < bName) return -1; //regresa -1 si es falso y 1 si es verdadero
  if (aName > bName) return 1;
  return 0;
});

pickSort.addEventListener("change", () => {
  // let valueSort = pickSort.value;  // sacar el valor de la constante con la que fue llamada el elem id
  let newArrayZA = sortData; // crear un nuevo arr para guardar el valor y buscar pokemon en el elemento
  manipulateData(newArrayZA); // nos ayuda a manipular toda la data
});
pickSort.addEventListener("change", () => {
  let newArrayAZ = sortData.reverse(pokemon => pokemon.name == valueSort); // se usa .reverse para ordenar de z-a
  manipulateData(newArrayAZ);
});
// const newArraySort = {};
// if (valueSort === "az") {
//   newArraySort = sortData;
//   console.log(newArraySort);
// } else if (valueSort == "za") {
//   newArraySort = sortData.reverse();
//   console.log(newArraySort);
// }
