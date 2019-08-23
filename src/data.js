window.data ={
// Función que depura la data y solo hace el llamado de la data solicitada
  debugData: (data) => {
    const newarrayData = [];
    for(let i in data ){
      let name = data[i]["name"];
      let title = data[i]["title"];
      let info = data[i]["info"];
      let tags = data[i]["tags"];
      let splash = data[i]["splash"];
      let stats = data[i]["stats"];

      newarrayData.push(
        {
          name,
          title,
          info,
          tags,
          splash,
          stats
        });
    }
    // console.log (debugData(data));
    return newarrayData;
    
},





campeonesByName: (valueBySearch,arrayDebug ) => {
const newArray = arrayDebug.filter((ev) =>{
  return ev.name.toLowerCase().indexOf(valueBySearch) !== -1;
});

     newArray();
  },



searchByRol: (chosenValue, arrayDebug) => {
const newArrayRol = arrayDebug.filter( (ev) => {
  return ev.tags[0].indexOf(chosenValue) !== -1;
});
return newArrayRol;
},

filterByBestChampions: (attributes,arrayDebug) =>{
const bestChampions=arrayDebug.filter(arrayDebug => arrayDebug.info[attributes] > 9);
return bestChampions;
},


filterbyletter:(selectedOption, arrayDebug) => {
const orderletter = arrayDebug.sort((a, b) => {
if (selectedOption === "A" ){
  return ((a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0));
}
else if (selectedOption === "Z" ){
  return ((a.name > b.name) ? -1 : ((a.name < b.name) ? 1 : 0));
}
});
return orderletter;
},

promedio: (chosenValue, arrayDebug) =>{
  const newArrayRol = arrayDebug.filter(function (el) {
    return el.tags[0].indexOf(chosenValue) !== -1;
  });
  let rolAverage =newArrayRol.length*100 /134;
  let promRound= Math.round(rolAverage);
  return (promRound);
},

};