

let tarjetas= document.getElementsByClassName("tarjeta"); //variable para localizar las tarjetas, las devuelve en un arreglo

for(let i = 0 ; i < tarjetas.length; i++){ //recorre el nuevo arreglo, lo mide y le asugna un valor numérico

  tarjetas[i].addEventListener('click', function() { //con la variable interna, se le asigna el evento "Click" a cada una de las tarjetas

    let tarjeta = tarjetas[i] //cada tarjeta se guarda en una variable

    mostrar(tarjeta) //Se ejecuta la función mostrar y se le pasa como parámetro la tarjeta

  })


}

function mostrar(tarjeta) { 
  //console.dir(tarjeta) //.dir sirve para mostrar las propiedades dentro del elemento HTML
let info = tarjeta.children[0].childNodes[7]; //se crea un avariable nueva que va a buscar dentro del elemento HTML "tarjeta" los "hijos" en busca del elemento info
//AQUI hacker edition: for para cuando se seleccione otra imagen, desaparezca la info de la anterior se va a cambiar la propiedad display de todos los elementos a none y después la que quieres

  info.style.display == 'none' ? info.style.display='block' : info.style.display='none'; //Se utiliza un operador ternario para desplegar la información al hacer click en la tarjeta
  //console.log(info);
  
}

//FILTRAR POR ESPECIE
let selectorSpecies = document.getElementById("species"); //Variable para buscar en HTML el selector
let filterSpecies= function() { 
  let seleccionSpecies= getCleanedStringSpecies(selectorSpecies.value); //Variable para obtener el valor de la selección del selector
  console.log(seleccionSpecies);
  for(let i = 0 ; i < tarjetas.length; i++){ //Ocultar tarjetas
    tarjetas[i].style.display = 'none'
  }
  let tarjetasSpecies= document.getElementsByClassName(seleccionSpecies); //Variable que busca las misma clase del valor del selector. Devuelve un arreglo
  for(let i = 0 ; i < tarjetasSpecies.length; i++){
    tarjetasSpecies[i].style.display = 'block' //Se recorre el arreglo y se muestra 
  }
}
selectorSpecies.addEventListener('change', filterSpecies); //Se llama al evento "change" que sirve para obtener el valor del selector cuando cambia


//FILTRAR POR ORIGEN
let selector = document.getElementById("filter"); //Variable para buscar en HTML el selector
let filter= function() { 
  let seleccion= getCleanedString(selector.value); //Variable para obtener el valor de la selección del selector
  //console.log(seleccion);
  for(let i = 0 ; i < tarjetas.length; i++){ //Ocultar tarjetas
    tarjetas[i].style.display = 'none'
  }
  let tarjetasFiltradas= document.getElementsByClassName(seleccion); //Variable que busca las misma clase del valor del selector. Devuelve un arreglo
  for(let i = 0 ; i < tarjetasFiltradas.length; i++){
    tarjetasFiltradas[i].style.display = 'block' //Se recorre el arreglo y se muestra 
  }
}
selector.addEventListener('change', filter); //Se llama al evento "change" que sirve para obtener el valor del selector cuando cambia


