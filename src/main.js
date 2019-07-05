const data = window.RICKANDMORTY.rickandmorty;

const card = document.getElementById("rick-card")

let i = ' ';

const showCard = ()=>{ //imprimir data en cartas
  let str = ' '
      data.forEach(element =>{
        console.log(element)
        str += <div class="card"> <p>${element.name}</p>
        <img src="${element.image}"></img>
        <p>${element.name}</p>
        </div>
      });
      card.innerHTML = str
}
