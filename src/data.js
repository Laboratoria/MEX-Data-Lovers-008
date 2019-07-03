// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const filterData = (key, value) => {
    let items = data.filter(element => element[key].indexOf(value) > -1)
    console.log(items);
    return items.map(element =>
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


window.filterData = filterData;