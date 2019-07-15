// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example;

//---- Menú hamburguesa ----//

const showMenu = () => {
  principalMenu.classList.toggle("site-nav-open");
};

// const closeMenu = () => {
//   principalMenu.classList.toggle("site-nav-close");
// };

//---- Imágen Preload ----//

const containerPreload = document.getElementById("container-charge");

const preloadCharge = () => {
  containerPreload.style.display = "none";
};
window.onload = preloadCharge;

//---- Aparecer y desaparecer secciones ----//
// const searchSection = document.getElementById("search");
const welcomeSection = document.getElementById("welcome");
const startButton = document.getElementById("button-start");
const collectionSection = document.getElementById("collection-section");
const menuWelcome = document.getElementById("home-m");
const menuSearch = document.getElementById("search-m");
const menuCollection = document.getElementById("collection-m");

const showSearch = () => {
  welcomeSection.classList.add("search-section");
  collectionSection.classList.remove("search-section");
};

const showCollection = () => {
  collectionSection.classList.toggle("show-collection");
};

startButton.addEventListener("click", showSearch);

menuWelcome.addEventListener("click", showCollection);

// //---- Filtrar data ----//
// const newArrayPokemon = data.filter(pokemon.type[0]);
// const pickType = document.getElementById("pick-type");

// pickType.addEventListener("change", () => {
//   console.log("nada");
// });
