//Declarando las variables para enlazar elementos
const homePage = document.getElementById('homePage');
const championList = document.getElementById('champion-list');
const cardSummary = document.getElementById('card-summary');
const rol = document.getElementsByClassName('rol');
const cardChamp = document.getElementById('card-champ');


//Declarando las variables para enlazar botones
const buttonEnter = document.getElementById('buttonEnter');
const closeFunFacts = document.getElementById('close-fun');


const printCard = (champ) => {
    document.getElementById('printCard').innerHTML = `<h1>${champ.name}</h1>
  <p class="champion-title">${champ.title}</p>
  <div class="background-modal" style="background-image:url(${champ.splash})">
  <h2>${champ.tags[0]}</h2>
  <h2>${champ.tags[1]} </h2>
  <p class="champion-stats">Attack: ${champ.info.attack}</p>
  <p class="champion-stats">Defense: ${champ.info.defense}</p>
  <p class="champion-stats">Magic: ${champ.info.magic}</p>
  <p class="champion-stats">Difficulty: ${champ.info.difficulty}</p>
  <p class="champion-stats">HP: ${champ.stats.hp}</p>
  <p class="champion-stats">MP: ${champ.stats.mp}</p>
  <p class="champion-stats">Armor: ${champ.stats.armor}</p>
  <p class="champion-stats">Crit: ${champ.stats.crit}</p>
  <p class="champion-stats">Attack Damage: ${champ.stats.attackdamage}</p>
  <p class="champion-stats">Move Speed: ${champ.stats.movespeed}</p>
  </div>`;
};

//Input para buscar por nombre
let search = document.getElementById('search');
//Variable para extraer la data
const lolData = window.LOL.data;

//Evento del boton Comenzar
homePage.addEventListener('click', () => {
    buttonEnter.classList.add('hide');
    championList.classList.remove('hide');
    const newArrayChamp = window.lol.showData(lolData);
    printData(newArrayChamp);
});

//Variable para seleccionar el campeón a visualizar
const champion = document.getElementsByClassName('champion');

//Función para imprimir la data en el HTML
const printData = (newArrayInfo) => {
    cardSummary.innerHTML = " ";
    newArrayInfo.forEach(champ => {
        let result = `<div id='${champ.name}' class="champion"> 
        <img src="${champ.img}">
    <h3> ${champ.name} </h3> 
    </div>`;
        cardSummary.insertAdjacentHTML("beforeend", result);
    });

    for (let i = 0; i < champion.length; i++) {
        champion[i].addEventListener("click", () => {
            let champElegido = champion[i].id;
            const champ = window.lol.toCard(lolData, champElegido);
            printCard(champ);
            cardChamp.classList.remove('hide');
        });
    }
};

//Función para cerrar la tarjeta de los campeones
closeFunFacts.addEventListener('click', () => {
    cardChamp.classList.add('hide');
});
//Función para cerrar la tarjeta de los campeones dando clic fuera de la tarjeta
window.addEventListener('click', () => {
    if (event.target == cardChamp) {
        cardChamp.classList.add('hide');
    }
});

//Funcion para buscar por nombre
search.addEventListener('keyup', () => {
    let name2 = search.value;
    // let search3 = searchByName.toLowerCase();
    const newArrayChamp = window.lol.showData(lolData);
    let filtered = window.lol.filterByName(newArrayChamp, name2);
    if (name2 == "") {
        printData(newArrayChamp);
    } else {
        printData(filtered);
    }
});

//Función para seleccionar rol
const selectRol = () => {
    for (let i = 0; i < rol.length; i++) {
        rol[i].addEventListener("click", () => {
            let rolId = rol[i].id;
            const newArrayChamp = window.lol.showData(lolData);
            const arrayFiltered = window.lol.filterByRol(newArrayChamp, rolId);
            printData(arrayFiltered);
        });
    }
};
selectRol();

