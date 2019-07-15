// mostrar y ocultar secciones

const enterButton = document.getElementById ('button-enter');

const hideSection = (id)=> {
  document.getElementById(id).classList.add ('hide');
}

const showSection =(id) => {
  document.getElementById(id).classList.remove('hide');
}

const openPageOne = () => {
  hideSection ('rolePage');
  hideSection ('homePage');
  showSection ('pageOne');
} 

enterButton.addEventListener ('click', openPageOne);


const openRolePage = () => {
  showSection ('rolePage');
  hideSection ('PageOne');
}


// //accediendo a data de aatrox
// let dataBase = LOL.data
// let newObject = dataBase.Aatrox.info
// console.log (newObject)

// //convirtiendo base de datos de un solo campeón a arreglo
// let dataBase = LOL.data;
// let newArray = Object.values(dataBase.Aatrox)
// console.log (newArray)

//pasar toda la base de datos a arreglo
const dataBase = LOL.data;
const newArray = Object.values(dataBase);
//accediendo a Aatrox en el nuevo arreglo 
//let newDataChamp = newArray[0];
const showCard = document.getElementById('cards-champion');

//usando la data como array para acceder a datos específicos
let dataForIndividualCard = '';
newArray.forEach(element => {
  const imagenChamp = element.splash
  const nameChamp = element.id;
  const titleChamp = element.title
  const roleChamp = element.tags;
  const descriptionChamp = element.blurb;
  //Se muestra en consola lo siguiente:
  // console.log(nameChamp);
  // console.log(roleChamp)
  // console.log(description)

  //Pintar en html
  dataForIndividualCard += `<article id="cards" class="col-8">
  <img class="iconX" src="../img/delete-button.png">
  <img id="absoluteImg" src= "${imagenChamp}" alt="ImagenChampion">
  <div id= "descChamp">
  <h2>${nameChamp}</h2> <br>
  <p>${titleChamp}</p> <br>
  <p>${roleChamp} </p> <br>
  <p>${descriptionChamp} </p>
  </div>
  </article>`;
});

showCard.innerHTML= dataForIndividualCard;







//Pintar todos los avatares en pantalla solución 1 
const printAllAvatar = document.getElementById("allAvatar"); 

//En vez de usar forEach, uso for

const showChampions= (newArray) => {
  let str = "";
  for (let i = 0; i < newArray.length; i++) {
    str += `<div  class="img-champions" >
        <img id="img-avatar" src="${newArray[i].img}">
        <br>
      <div>
       ${newArray[i].name}
      </div>
    </div>`;
  }
  printAllAvatar.innerHTML = str;
};
showChampions(newArray)




// //empezando a ordenar, primero pruebo sort, sale ordenado raro
// newArray.sort (console.log);

//array usando una función de comparación, ya se ordena por orden a-z
// console.log(newArray.sort ((a,b) => a-b));

//usando reverse, pasan a orden Z-A
// let reversa = newArray.reverse();
// console.log(reversa);

// //filtrando por tag asesino
// const onlyAssassins = newArray.filter(championRole => championRole.tags[0] =="Assassin");
// console.log(onlyAssassins);

const newData= [];
const rolePage = document.getElementById('rolePage');

const printByRole = (newArray) => {
  let stringV ='';
  newArray.forEach(element =>{
    stringV += `<div class="flip-card">
    <div class="flip-card-inner">
        <div id="front-card">
            <img id="bigImg" src="${element.splash}" alt="imageChampion">
            <div class="champInfo">
                <h3>${element.id}</h3>
            </div>
        </div>
        <div id="back-card">
        <div class="champStats">
            <br>
            <h3>${element.id}</h3>
            <h4>Information</h4> <br>
            <p>Attack: ${element.info.attack}</p>
            <p>Defense: ${element.info.defense}</p>
            <p>Magic: ${element.info.magic}</p>
            <p>Difficulty: ${element.info.difficulty}</p> <br>
            <h4>Stats</h4> <br>
            <p>HP: ${element.stats.hp}</p>
            <p>MP: ${element.stats.mp}</p>
            <p>Move speed: ${element.stats.movespeed}</p>
            <p>Armor: ${element.stats.armor}</p>
            <p>Spell block: ${element.stats.spellblock}</p>
            <p>Attack range: ${element.stats.attackrange}</p>
            <p>HP regeneration: ${element.stats.hpregen}</p>
            <p>MP regeneration: ${element.stats.mpregen}</p>
            <p>Crit: ${element.stats.crit}</p>
            <p>Attack damage: ${element.stats.attackdamage}</p>
            <p>Attack speed: ${element.stats.attackspeedoffset}</p> <br><br>
        </div>
    </div>
    </div>
</div>`
  })
  rolePage.innerHTML = stringV;
}
