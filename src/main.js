  
  let thepokemon;


  /*fetch('data/pokemon/pokemon.json')
  .then(answer =>answer.json())
  .then(answer =>{
    thepokemon = answer;
    imagePokemon(thepokemon);
  } )*/

  const parapintar = document.getElementById('cardInformation')
  const dataPoke= POKEMON.pokemon 
  const selectTypePK= document.getElementById('selectType')
  const selectEvolution= document.getElementById('evolution')
  const newArray = []
  const newData = []
  
  const showData/* const print pokemons*/ = () => {
    let items = ''; //Variable vacía donde se imprimira cada elemento del data
    dataPoke.forEach(element => {
    const num = element.num
    const name = element.name
    const img = element.img
    const type = element.type
    const weaknesses = element.weaknesses
    
  
      items +=`<div class= "col-4 card-item">
      
      <p class ="poke-num"><strong> # ${num}</strong></p>
      <p class ="poke-name"><strong>${name}</strong></p>
      <p class ="poke-type">* Tipo: ${type}</p>
      <figure class ="poke-img">
        <img src="${img}" alt= " " />
        </figure>
        <p class ="poke-type">* Devilidad: ${weaknesses}</p>
    </div>`
      
    });
    // containerCard.innerHTML = items;
    parapintar.innerHTML = items
}
showData();

// accion de filtrado por ltipos
document.getElementById("selectType").addEventListener("change",() =>{
  document.getElementById("container_organized").innerHTML = " "  
    
   let tipo =document.getElementById("selectType").value
    for (let i = 0; i <window.pokemon.filterData(dataPoke, tipo).length ; i++){   

     document.getElementById("container_organized").innerHTML += ` 
     <div class="col-4 card-item">
     <p class="poke-num"><strong># ${window.pokemon.filterData(dataPoke, tipo)[i].num}</strong></p>
     <p class="poke-name"><strong>${window.pokemon.filterData(dataPoke, tipo)[i].name}</strong></p>
     <p class ="poke-type">* Tipo: ${window.pokemon.filterData(dataPoke, tipo)[i].type}</p>  
     <figure class ="poke-img">
         <img src="${window.pokemon.filterData(dataPoke, tipo)[i].img}" alt= " " />
       </figure>
       <p class ="poke-type">* Devilidad: ${window.pokemon.filterData(dataPoke, tipo)[i].weaknesses}</p>
   </div>
       `;  
 }
 showData(window.pokemon.filterData(dataPoke, tipo)); 
 });

 // accion de filtrado por evolucion
document.getElementById("evolution").addEventListener("change",() =>{
  document.getElementById("container_organized").innerHTML = " "  
    
   let tipo =document.getElementById("evolution").value
    for (let i = 0; i <window.pokemon.filterData(dataPoke, tipo).length ; i++){   

     document.getElementById("container_organized").innerHTML += ` 
     <div class="col-4 card-item">
     <p class="poke-num"><strong># ${window.pokemon.filterData(dataPoke, tipo)[i].num}</strong></p>
     <p class="poke-name"><strong>${window.pokemon.filterData(dataPoke, tipo)[i].name}</strong></p>
     <p class ="poke-type">* Tipo: ${window.pokemon.filterData(dataPoke, tipo)[i].type}</p>  
     <figure class ="poke-img">
         <img src="${window.pokemon.filterData(dataPoke, tipo)[i].img}" alt= " " />
       </figure>
      <p class ="poke-type">* Devilidad: ${window.pokemon.filterData(dataPoke, tipo)[i].weaknesses}</p>
      
   </div>
       `;  
 }
 showData(window.pokemon.filterData(dataPoke, tipo)); 
 });
 
 //accion de ordenado
 const div_container = document.getElementById("container_organized"); //imprime el listado ordenado

  document.getElementById("selectOrder").addEventListener("change", () => {
    div_container.innerHTML=""

      if (document.getElementById("selectOrder").value === "a-z" || document.getElementById("selectOrder").value === "z-a") {
        for (let i = 0; i <dataPoke.length ; i++) {
         
        document.getElementById("container_organized").innerHTML +=` 
        <div class="col-4 card-item">
        <p class="poke-num"><strong>#${window.pokemon2.sortData(dataPoke, "num", document.getElementById("selectOrder").value)[i].num}</strong></p>
        <p class="poke-name"><strong>${window.pokemon2.sortData(dataPoke, "name", document.getElementById("selectOrder").value)[i].name}</strong></p>
        <p cslass = "poke-type>* Tipo:  ${window.pokemon2.sortData(dataPoket, "name", document.getElementById("selectOrder").value)[i].type}</p>
        <figure class ="poke-img">
            <img src="${window.pokemon2.sortData(dataPoke, "name", document.getElementById("selectOrder").value)[i].img}" alt=" "/>        </figure>
          </figure>
          <p cslass = "poke-type>* Tipo:  ${window.pokemon2.sortData(dataPoket, "name", document.getElementById("selectOrder").value)[i].weaknesses}</p>  
      </div>        
     `    
     ;
    }
  }
     showData(window.pokemon2.sortData(dataPoke, "name", document.getElementById("selectOrder").value)); 
     });
