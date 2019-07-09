const data = LOL.data
  //usar paratodo tu código que tenga que ver con mostrar los datos en la pantalla. Con esto nos referimos básicamente a la interacción con el DOM. Operaciones como creación de nodos, registro de manejadores de eventos (event listeners o event handlers), ....
const root = document.getElementById('root');
const mostrarCampeones=document.getElementById("campeones");
mostrarCampeones.addEventListener("click",()=> {
  filterData(data)
})
const filterData = (data) => {
  const arr = Object.values(LOL.data);
  const newData = arr.filter( champ => champ.tags[0] == 'Support' )
  console.log(newData)
  printData(newData)
}
const printData= (data) => {
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
printData(data)