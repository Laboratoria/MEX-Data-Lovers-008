//filtrar por tipo de pokeon
  window.pokemon = {
    filterData(data, condition)  {
      let tiposDePokemon;
      if (typeof condition === "string") 
      {
        tiposDePokemon = data.filter(tipos =>{
          return tipos.type.indexOf(condition) !== -1;
         })
            
      }
      else {
        tiposDePokemon = data.filter(evolucion =>{
          return evolucion.prev_evolution===(condition);
        })  
    }
    return tiposDePokemon; 
  }
};


//funcionde ordenar
window.pokemon2 = {
  sortData (data, sortBy, sortOrder) {
  if (sortBy === "upward" && sortOrder === "a-z"){
    data.sort((a,b) =>{
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      //a debe ser igual b
      return 0; 
    } );
   }else if (sortBy === "falling" && sortOrder === "z-a"){
    data.reverse((a,b) =>{
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      //a debe ser igual b
      return 0;
    } );

    } else if (sortBy === "less" && sortOrder === "1-151"){
    data.sort((a,b) =>{
      if (a.num > b.num) {
        return 1;
      }
      if (a.num < b.num) {
        return -1;
      }
      //a debe ser igual b
      return 0;
    } );
   } else if (sortBy === "higher" && sortOrder === "151-1"){
      data.reverse((a,b) =>{
        if (a.num > b.num) {
       return 1;
     }
      if (a.num < b.num) {
        return -1;
      }
    //a debe ser igual b
    return 0;
  });
  }
}
}