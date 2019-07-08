const data = RICKANDMORTY;
console.log(data);
const card = document.getElementById ("rick-mory-card")

const dataSee = (data)=>{
 let str = ''
   data.results.forEach(element => {
     console.log(element )
    str +=`<div class="card">
    <img src = ${element.image}>
    <p>${element.name}<p>
    <p>${element.status}<p>
    <p>${element.gender}<p>
    <p>Specie:${element.species}<p>
    <p>Origin planet:${element.origin.name}<p>
    <p>Location:${element.location.name}<p>

    </div>`
  });
  card.innerHTML = str
}
dataSee(data)

//<p>${element.gender}<p>
