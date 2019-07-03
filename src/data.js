// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


const filterData = (key, value) => {//2 parámetros. Value del index tiene 2 palabras (valor.propiedad)
    let items = data.filter(element => element[key].indexOf(value) > -1)//Varaible vacia donde se guardara c/elemento que cumpla con la condición. -1 = index inexistente = false
    return items.map(element => // items = array. .map itera items

//Al cumplirse con la condición, ejecutar el siguiente código.
        `<div class="data-card">
        <div class="card">
            <div class="img">
                 <img class="character-img" src="${element.image}" />
            </div>
            <div class="info">
                <p class="character-name"> ${element.name}</p>
                <p>Especie: ${element.species}</p>
                <p>Dimensión: ${element.origin.name}</p>
            </div>
        </div>
    </div>`
    )
}


window.filterData = filterData; //Guarda la función en el global para poder ser invocada de donde sea