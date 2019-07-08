
const data = RICKANDMORTY;
console.log(data);
const card = document.getElementById ("rick-mory-card")



const dataSee = (data)=>{
  let str = ''
    data.results.forEach(element => {
      console.log(element )
     str +=`<div class="card"><p>${element.name}<p>
     <p>${element.status}<p>
     <p> specie: ${element.species}<p> <p>${element.gender}<p><p>${element.origin.name}<p><p>${element.location.name}<p>
     <img src = "${element.image}"> </di>`

     
   });
   card.innerHTML = str
}
dataSee(data)

