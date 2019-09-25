const data = RICKANDMORTY.results;
console.log(data);

const allAlive = data.filter(element => element.status === "Alive");
console.log(allAlive);

const allDead = data.filter(element => element.status === "Dead");
console.log(allDead);

const allFemale = data.filter(element => element.gender === "Female");
console.log(allFemale);

const allMale = data.filter(element => element.gender === "Male");
console.log(allMale);

const ordenarData = () => {
let newArray = data.forEach (element => element.name);
console.log(newArray)}
ordenarData();


window.allAlive = allAlive;
window.allDead = allDead;
window.allMale = allMale;
window.allFemale = allFemale;



/*const filterName = () => {
  let allRick = data.filter(element => element.name === "Rick Sanchez");
  console.log(allRick);
  return allRick;
}
filterName();*/

/*const filterPersonajes = (data, filterValue) => {
  let filterData = data.filter (element => element.status == filterValue);
  console.log(filterData)
  return filterPersonajes;
}

window.filterPersonajes = filtrarPersonajes;
/*

const filtrarPersonajes = (data) => {
  let filterData = data.filter (element => element.status[0] == filterValue);
  console.log(filterData)
  printDataPersonajes(filterData);
}

const filtrarPersonajes = (data) => {
  let filterData = data.filter (element => element.status.includes(filterValue));
}

window.filtrarPersonajes = filtrarPersonajes;
--

selectType.addEventListener('change', () => {
  const selectUser = selectType.value
  const pokeTierra = data.filter(tierra => tierra.type.includes(selectUser));
  
  const pokeTierra = data.filter(tierra => tierra.type[0] == selectUser);

  console.log(pokeTierra);
  printPokemons(pokeTierra)
 })*/


/*const newArray = data.filter( element => console.log(element.key[0])) (regresa cada uno de los elementos del array, con el key invocado)

const pokemonEgg = newArray.filter(pokemonEgg => console.log(havegg))*/


/*let filterData2 = () => {
    let filterResult = "";
    let filterValue = buttonFilter.value;
    let filterResult = window.filterPersonajes(data,filterValue);
    printDataPersonajes(filterResult);
    console.log(filterData2);*/
























