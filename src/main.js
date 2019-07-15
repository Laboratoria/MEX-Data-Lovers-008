// funcion que muestra en pantalla
// const muestra = (a, donde) => { 
//   console.log(donde);
//   let lista = "";
//   a.forEach(e => {
//     lista += `<div id = "${e.name}" class = "caja-item">
//                     <figure>
//                       <img src="${e.img}" alt="${e.name}" width="50" height="50" />
//                     </figure>
//                       <p>${e.num}</p>
//                       <p>${e.name}</p>
//                   </div>`
//       });
//   // donde.innerHTML = lista;
// };
let btnName = document.getElementById("btn-name"); // boton de busqueda por nombre de pokemon

// FUNCION QUE BUSCA POR NOMBRE:
let buscarNombre = () => {
  let nameBuscar = document.getElementById('txt-name').value.toLowerCase();
  let resultBuscar = document.getElementById('result-buscar');
  for (let a of POKEMON.pokemon) {
    let nombre = a.name.toLowerCase();
    if (nombre.indexOf(nameBuscar) > -1) {
      resultBuscar.innerHTML = 
       `<div class = "caja-item" id = "caja-item-big">
        <figure>
          <img src = "${a.img}" width = "75" height = "75" />
        </figure>
        <p><strong>Número:</strong> ${a.num}</p>
        <p><strong>Nombre:</strong> ${a.name}</p>
        <p><strong>Tipo: </strong>${a.type}</p>
        <p><strong>Debilidad: </strong>${a.weaknesses}</p>
        </div>`
    }
  }
  event.preventDefault();
};
  btnName.addEventListener('click', buscarNombre);

// FUNCION QUE MUESTRA LA LISTA A - Z DE POKEMONES AL INICIO 
const listAZ = () => {
    // ordena los pokemones por nombre de A a Z
    a = POKEMON.pokemon.sort(function (a, b){ 
      if ( a.name < b.name ) {  return -1; }  
      if ( a.name > b.name ) {  return 1;  }
      return 0;
    });
    // muestra en pantalla la lista de pokemones
    let lista = "";
     for (i in a)  {
        lista += `<div class = "caja-item">
                    <figure>
                      <img src="${a[i].img}" alt = "${a[i].img}" width="50" height="50" />
                    </figure>
                      <p>${a[i].num}</p>
                      <p>${a[i].name}</p>
                  </div>`
        document.getElementById("lista-pokes").innerHTML = lista;
        }
      event.preventDefault();
    };
  document.addEventListener("DOMContentLoaded", listAZ);
  document.getElementById("btn-az").addEventListener("click", listAZ);

      // //prueba poke-ficha
      //   const cajaItem = document.getElementsByClassName("caja-item");
      //   for (let i = 0; i < cajaItem.length; i++) {
      //       cajaItem[i].addEventListener ("click", () => {
      //           const idTarget = event.target.id;
      //           console.log(idTarget);
      //     })
      //   }
      // fin prueba

// FUNCION QUE MUESTRA LA LISTA ORDENADA de la Z a la A:
  const showListZA = () => {
    a = POKEMON.pokemon.sort(function (a, b){ 
      if ( a.name > b.name ) {  return -1; }  
      if ( a.name < b.name ) {  return 1;  }
      return 0;
    });
    // muestra en pantalla la lista de pokemones
    let lista = "";
     for (i in a)  {
        lista += `<div class = "caja-item">
                    <figure class="poke-img">
                      <img src="${a[i].img}" width="50" height="50" />
                    </figure>
                      <p class="poke-num">${a[i].num}</p>
                      <p class = "poke-name">${a[i].name}</p>
                  </div>`
        document.getElementById("lista-pokes").innerHTML = lista;
      }
    // event.preventDefault();
  };
  document.getElementById("btn-za").addEventListener("click", showListZA);

  // busqueda por tipo
  let pokemonList = document.getElementById("select-tipo");
  const busqTipo = () => {
    let lista = "";
    let selectPokemon = pokemonList.options[pokemonList.selectedIndex].value;
    const result = POKEMON.pokemon.filter(pokemon => pokemon.type[0] === selectPokemon);
    result.forEach(a =>{
        lista += `<div class = "caja-item">
                    <figure>
                      <img src="${a.img}" width="50" height="50" />
                    </figure>
                      <p>${a.num}</p>
                      <p>${a.name}</p>
                  </div>`
        document.getElementById("result-buscar").innerHTML = lista;
    });
  };
  pokemonList.addEventListener("change", busqTipo);

  // llena el select para busqueda por tipo
        // for (i in a)  {
        //   var idSelect = document.getElementById("lista-nombres");
        //   var addOption = document.createElement("option");
        //   idSelect.options.add(addOption, i);
        //   addOption.text = a[i].num + " - " + a[i].name;  
        // } 
  
  
//   let myFunction = () => {
//     pantallaBuscar.style.display = "block";
//     mostrar.style.display = "none";
//     pantallaTipos.style.display = "none";
//     pantallaPrintTipo.style.display = "none";
//     pantallaPrintOrden.style.display = "none";
//   };
//   botonPrueba.addEventListener("click",myFunction);