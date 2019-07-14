//Working with help button-instructions
const helpButton = document.getElementById('help-button');
const closeButton = document.getElementById('close');
//const returnButton = document.getElementById('return-button');
const orderNameAsc = document.getElementById('ordsname-a');
const orderNameDes = document.getElementById('ordsname-d');

const dataPokemon = window.POKEMON.pokemon;

//Function that hide section with id
const hideSection = (id) => {
        document.getElementById(id).classList.add('hide');
    }
    //Function that show section with id
const showSection = (id) => {
    document.getElementById(id).classList.remove('hide');
}


//Functionability for help button and close button
const showInstructions = () => showSection('instructions');
const closeInstructions = () => hideSection('instructions');

helpButton.addEventListener("click", showInstructions);
closeButton.addEventListener("click", closeInstructions)

//Return button

const goBack = document.getElementById('return-button');

const goback = () => { 
    hideSection('dataPokemon');
   // hideSection('tipos-Pokemon');
    hideSection('sorta-z');    
    showSection('PaginaInicio');
}

goBack.addEventListener("click", goback);



//Pokedex section
const AllPokemon = document.getElementById('show-button');

const openPokedex = () => {
    hideSection('PaginaInicio');
    // hideSection('type-pokemon');
    //showSection('tipos-Pokemon');
   //showSection('sorta-z');
    showSection('dataPokemon');
    showSection('Pokedex');
    showSection('filtermenu');
    
}

AllPokemon.addEventListener("click", openPokedex);    



// Show data HTML //
//Data

const baseData = POKEMON.pokemon;
const card = document.getElementById("dataPokemon");

const cardData = (baseData) => {
    let str = ''
    baseData.forEach(element => {
        str +=
            `<div class="Pokedex">
        <div class= "card">
        
        <p>Id:${element.num}</p>
       
        <div class="img">
        <img src="${element.img}"></img>
        </div>
        
        <div class="info">
        <p>Nombre:${element.name}</p>
        
         <p>Tipo:${element.type}</p>
        </div>
        </div>
        </div>`

    });

    card.innerHTML = str
};
cardData(baseData)



// const orderNameAsc = document.getElementById('ordsname-a');
// const orderNameDes = document.getElementById('ordsname-d');








/////////////////// PRUEBA CON TARGET ///////////////////////////
// const button = document.getElementsByClassName('buttonType') //Esta variable se manda llamar por la clase que tiene cada uno de los botones//
// //console.log(button)

// const targetPok=(event)=>{
// const pokeId  = event.target.id //Como todos los botones tienen la misma clase, lo que hace ésta función es buscar el id de cómo el usuario quiere buscar....//
// console.log(pokeId);
// const filterType=window.typesPok(pokeId); //Esta variable mandará llamar la función del filtrado por tipo de pokémon//
// switch (pokeId){
//   case('ordsname-a'):
//  if(pokeId=='ordsname-a'){ //como los botones tienen la misma clase "button type", solo buscara el id para ordenar de forma ascendente//
//   cardData(sorData(dataPokemon,'name','ASC')); //Se manda llamar la función de ordenar por nombre de A-Z//

// }
// break;
// case('ordsname-d'):
//   if(pokeId=='ordsname-d'){ //como los botones tienen la misma clase "button type", solo buscara el id para ordenar de forma descendente//
//     cardData(sorData(dataPokemon,'name','DESC')); //Se manda llamar la función de ordenar por nombre de Z-A//

// }
// break;
// case('return'):
//   if(pokeId=='return'){
//   cardData(baseData);
// // Primer filtro A-Z Z-A//

// }
// break;
// default:
// // Segundo filtro por tipo de pokémon //
// cardData(filterType);

// }
// }
// for(let i = 0; i < button.length ; i++){
//   button[i].addEventListener('click' , targetPok); //Lo que hace el for es que de todos los botones que tengan esta clase, buscará el id//
     
//      }
    
//Filter by type 

const button = document.getElementsByClassName('buttonType'); //Esta variable se manda llamar por la clase que tiene cada uno de los botones//
console.log(button);
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        //const targetPok = (event) => {
        const pokeId = event.target.id; //Como todos los botones tienen la misma clase, lo que hace ésta función es buscar el id del tipo de pokémon que el usuario quiere buscar//
        const typesPok = baseData.filter((el) => el.type.find(tipo => tipo === pokeId)); //el=elemento que irá recorriendo y/o buscando dentro del arreglo 'type' el valor de 'Grass'//
        if (pokeId == 'return') {
            cardData(baseData);
        } else {

            console.log(typesPok);
            cardData(typesPok);
        }
    });
}

// Filter A-Z Z-A//


orderNameAsc.addEventListener('click', () => { /*  Ordenado ascendente por nombre*/
    cardData(sorData(dataPokemon, 'name', 'ASC'));
});
orderNameDes.addEventListener('click', () => { /* Ordenado descendente por nombre*/
    cardData(sorData(dataPokemon, 'name', 'DESC'));
});
     
/////////// Para obtener estadísticas de la data por oportunidad de aparición///////////
let spawnChancePok=[] 
for(let i=0;i<baseData.length;i++){ 
  //spawnChancePok = console.log(baseData[i].spawn_chance);
  spawnChancePok.push(baseData[i].spawn_chance);
}
let average=spawnChancePok.length;

let sum=spawnChancePok.reduce((accumulator,currentValue)=>accumulator+currentValue);
 average=sum/average;


/////////// Para obtener estadísticas ///////////
//Este primer ciclo es para guardar en un arreglo los pesos de los 151 pokémones//
let weightPok=[];    // arreglo que empieza vacío, pero será donde se guarde el nuevo arreglo para los pesos de los pokémones//
for(let i=0;i<baseData.length;i++){ //ESte for irá recorriendo toda la data ...
  
 weightPok.push(baseData[i].weight); //...para encontrar los valores del peso  
 }                                   //El push lo que hace es que por cada valor de peso que encuentre en la Data, lo va agregando al nuevo arreglo

//Este segundo ciclo es para guardar en un arreglo los cinco primeros valores de los strings por cada uno de los 151 pokémones//
let numWeight=[]; // arreglo que empieza vacío, pero será donde se guarde el nuevo arreglo para solo los primeros 5 valores del arreglo weightPok//
for(let j=0;j<weightPok.length;j++){ //ESte for irá recorriendo el arreglo weigthPok...
    let result=weightPok[j].substr(0,4); //...y con substr solo sacará los primeros cinco valores del arreglo weightPok 
    numWeight.push(result);              // Estos valores los guarda en el nuevo arreglo numWeight
}

//Este tercer ciclo es para guardar en un arreglo los "strings" que pasarán como "number"del arreglo numWeight//
let onlyNumWeight=[]; // arreglo que empieza vacío, pero será donde se guarden los valores "strings" convertidos a "number" del arreglo numWeight//
for(let k=0;k<numWeight.length;k++){ //ESte for irá recorriendo el arreglo numWeigth...
  let num=parseFloat(numWeight[k]); //...y con parseFloat para que me conveirta tanto el numero entero, como decimales de "string" a "number" 
  onlyNumWeight.push(num); // Estos "number" los guarda en el nuevo arreglo onlyNumWeight
}

//Para sacar el promedio del peso de los pokémones
let aveWeight=onlyNumWeight.length; //Obtengo la longitud total del arreglo
let sumWeight= onlyNumWeight.reduce((accumulator,currentValue)=>accumulator+currentValue); //Utilizo ".reduce" para que sume todos los elementos de "onlyNumWeight"
 aveWeight=sumWeight/aveWeight; //aveWeight(promedio)=suma del peso/total de pokémones
 aveWeight=aveWeight.toFixed(2);

 




