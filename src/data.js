window.data ={

  show: (pokemon) => {
    let cardPokemon= []; //variable vacia para crear array con nueva informacion
    
    for(let i=0; i< pokemon.length;i++) { //bucle para buscar en la data informacion especifica
      let number= pokemon[i].num;
      let name= pokemon[i].name;
      let image= pokemon[i].img;
      let type= pokemon[i].type;
      let debility= pokemon[i].weaknesses;

      //hacer nuevo array y añadir cada elemento
      cardPokemon.push(
        {
          number,
          name,
          image,
          type,
          debility
        }
      );
    
    }
    return cardPokemon;
    
  },
  
//Filtrado por tipo

// let arrayType = (showPokemon) => {
//   const newArray = showPokemon.filter(pokemon => pokemon.type[0] == "Fire");
//   console.log(newArray);
// }
// arrayType(showPokemon);


  filterData: (data, selectType) => {
    const filterType = data.filter(pokemon => pokemon.type[0] === selectType);
    return filterType;

  },

  // sortData: (data, sortOrder) => {

  //   if(sortOrder == "A") { //Se utilza if para indicarle que cuan inicie con A aplique el orden A-Z
  //     return data.sort((a,b) => {a.name.localeCompare(b.name)});
    
  //   } else if(sortOrder == "Z") {
  //     return data.sort((a,b) => {b.name.localeCompare(a.name)});
  //   }

  //   sortData(show);
  // }

  sortData: (data, sortOrder) => {

    let orderPok = data.sort ((a,b) => {
      if (sortOrder === "A") {
        if (a.name > b.name){
          return 1;
        }
      }else if (sortOrder === "Z") {
        if (a.name < b.name) {
          return 1;
        }
      }else if (sortOrder === "inferior"){
        if (a.number > b.number){
          return 1;
        }
      }else if (sortOrder === "superior"){
        if (a.number < b.number) {
          return 1;
        }
      }
    });
    return orderPok;

  },
  computeStats: (data) =>{

    const hierba = data.filter(showPokemon => showPokemon.type.includes("Grass"));
       const totalHierba= hierba.lengt;
     const veneno = data.filter(showPokemon => showPokemon.type.includes("Posison"));
       const totalVeneno= veneno.length;
     const fuego = data.filter(showPokemon => showPokemon.type.includes("Fire"));
       const totalFuego= fuego.length;
     const volador = data.filter(showPokemon => showPokemon.type.includes("Flying"));
      const totalVuelo= volador.length;
     const agua = data.filter(showPokemon => showPokemon.type.includes("Water"));
      const totalAgua= agua.length;
     const electrico = data.filter(showPokemon => showPokemon.type.includes("Electric"));
       const totalElectrico= electrico.length;
     const insecto = data.filter(showPokemon => showPokemon.type.includes("Bug"));
       const totalInsecto= insecto.length;
     const roca = data.filter(showPokemon => showPokemon.type.includes("Rock"));
      const totalRoca= roca.length;
     const hielo = data.filter(showPokemon => showPokemon.type.includes("Ice"));
       const totalHielo= hielo.length;
     const psyquico = data.filter(showPokemon => showPokemon.type.includes("Psychic"));
       const totalPsyquico= psyquico.length;
     const normal = data.filter(showPokemon => showPokemon.type.includes("Normal"));
       const totalNormal= normal.length;
     const tierra= data.filter(showPokemon => showPokemon.type.includes("Ground"));
       const totalTierra= tierra.length;
     const dragon = data.filter(showPokemon => showPokemon.type.includes("Dragon"));
       const totalDragon= dragon.length;
     const fantasma = data.filter(showPokemon => showPokemon.type.includes("Ghost"));
       const totalFantasma= fantasma.length;
     const oscuro = data.filter(showPokemon => showPokemon.type.includes("Dark"));
       const totalOscuro= oscuro.length;
     const lucha = data.filter(showPokemon => showPokemon.type.includes("Fighting"));
       const totalLucha= lucha.length;
     

    const totales = () => {
      return totalHielo,totalFuego, totalVuelo, totalAgua, totalDragon, totalFantasma, 
      totalDragon, totalOscuro, totalLucha, totalTierra, totalNormal, totalPsyquico, totalInsecto,
      totalElectrico, totalRoca, totalHierba, totalVeneno  <= 20;
    };
    console.log(totales);
  }

};
