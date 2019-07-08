  //usar paratodo tu código que tenga que ver con mostrar los datos en la pantalla. Con esto nos referimos básicamente a la interacción con el DOM. Operaciones como creación de nodos, registro de manejadores de eventos (event listeners o event handlers), ....
const filterData = () => {
  const arr = Object.values(LOL.data);
  const newData = arr.filter( champ => champ.tags[0] == 'Support' )
  console.log(newData)
}
filterData()

const root = document.getElementById('root')
const data = LOL.data
const printData= () => {

let string = ''
for (const key in data) {
    if (data.hasOwnProperty(key)) {
        const element = data[key];
        const name = element.name
        const rol = element.tags[0]
        const attack = element.info.attack
        const img  = element.img
    string += ` <div>
    <h3>${name}</h3>
    <p>${rol}</p>
    <p>Ataque : ${attack}</p>
    <img src="${img}" alt="">
  </div>`
    }
    
}
root.innerHTML = string
}
printData()
/*const filterBest1 = [];
for (let i= 0; i< best1.length; i++){
    if(best1[i]info.indexOf([1]) {
      filterBest1.push(best1[i].attack)
    }
}
console.log(filterBest1);*/

// const FighterChamps = []
//   arr.forEach(champ => { 
//     const  rol = champ.tags[0]
//     if(rol == 'Mage'){
//       FighterChamps.push(champ)
//     }
//   })
//   console.log(FighterChamps)


printData()
const az = document.getElementById("az");
//const inicio = document.getElementById("inicio");
const ordenAlfab = document.getElementById("root");

const irAOrdenAlfab = () => {
  ordenAlfab.classList.remove('disappear');
  az.classList.add('disappear');
}

irAOrdenAlfab.addEventListener('click',az);
