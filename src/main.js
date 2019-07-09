//CONST
const catalogButton = document.getElementById('catalog'); // catalog button
const logo = document.getElementById('logo'); // logo element
const data = window.RICKANDMORTY.results; // Call data R&M
const dataOrder = data;
const filterButton = document.getElementById('filter'); //Filter options button
const speciesButton = document.getElementById('species'); // Species options button
const orderButton = document.getElementById('order'); //Order options button 
const nextButton = document.getElementById('next');
const backButton = document.getElementById('back');
const curiosity = document.getElementById('curiosity');

//HIDE & SHOW

const hideSection = id => document.getElementById(id).classList.add('hide');
const showSection = id => document.getElementById(id).classList.remove('hide');

const showCatalog = () => {
    hideSection('landing-page');
    showSection('characters-page');
};

const returnToIndex = () => {
    hideSection('characters-page');
    showSection('landing-page');
};

catalogButton.addEventListener('click', showCatalog);
logo.addEventListener('click', returnToIndex);

//Carousel
const percentage = window.statisticsPercentage;
const value = window.statisticsValue;

const curiosities = [
    `A lo largo de las 3 temporadas de Rick and Morty han aparecido múltiples versiones de los protagonistas, por ejemplo existen <b>${value('name', 'Rick', data)} Ricks</b> es decir el <b>${percentage('name', 'Rick', data)}%</b> de todos los personajes.`,
    `Solo hay <b>${value('gender', 'Female', data)} mujeres</b> en toda la serie de Rick and Morty en contraste con <b> ${value('gender', 'Male', data)} de hombres</b>.<p>¡Solo el <b>${percentage('gender', 'Female', data)} %</b> son mujeres!</p>`,
    `La especie que más se repite en Rick and Morty es <b>Humano</b>, equivalente al <b>${percentage('species', 'Human', data)}%</b> de la población y <b>Alien </b> le pisa los talones con el <b>${percentage('species', 'Alien', data)}%.</b>`,
    `Se desconoce el estatus de vida de <b>${value('status', 'unknown', data)}</b> personajes. <p>Lo equivalente al <b>${percentage('status', 'unknown', data)} %.</p></b>`,
    //`El número de personas que viven en Earth (Replacement Dimension) son ${value('location.name', 'Earth (Replacement Dimension)', data)}.`,
];

let changer = 0;
curiosity.innerHTML = curiosities[changer];

const next = () => {
    changer++;
    carousel();
};

const back = () => {
    changer--;
    carousel();
};

const carousel = () => {
    if (changer > curiosities.length - 1) {
        changer = 0;
    } else if (changer < 0) {
        changer = curiosities.length - 1;
    }
    curiosity.innerHTML = curiosities[changer];
};


nextButton.addEventListener('click', next);
backButton.addEventListener('click', back);


// Showing data
const allData = document.getElementById('all-data'); //Section where data is going to appear
const templateStringForCards = (element) => {
    return `<div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <div class="img">
        <img class="character-img" src="${element.image}"/>
        </div>
        <div class="info">
            <p class="character-name">${element.name}</p>
           <p>Especie: ${element.species}</p>
           <p>Dimensión origen: ${element.origin.name}</p>
        </div>
      </div>
      <div class="flip-card-back">
        <p> ${element.name} </p>
        <p> Dimensión actual: ${element.location.name} </p>
        <p> Tipo: ${element.type} </p>
        <p> Género:  ${element.gender} </p>
        <p> Estatus: ${element.status} </p>
      </div>
    </div>
    </div>`;
    /*`<div class="data-card">
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
</div>`;*/
};

//FUNCTION to show data
const showData = () => {
    let items = ''; //Variable vacía donde se imprimira cada elemento del data
    data.forEach(element => {
        items +=
            templateStringForCards(element);
    });
    allData.innerHTML = items;
};

showData();

//Working with filter button
const getFilterValue = event => {
    const filterValue = event.target.value; //Se guarda el valor de los option del html
    if (filterValue === 'all') {
        showData();
    } else {
        const splitFilterValue = filterValue.split('.'); //Toma el filter value y lo divide en un array por el punto. El split detecta el . del nombre del value.
        const key = splitFilterValue[0]; //aqui se guarda la propiedad ej. "name"
        const value = splitFilterValue[1]; //aqui se guarda el valor ej."Rick"

        let result = window.filterData(key, value, data); //variable vacía que guarda el resultado de la función ya ejecutada
        const cards = result.map(element => templateStringForCards(element)); // result = array. .map itera items
        allData.innerHTML = cards.join(''); //Al cumplirse con la condición, ejecutar el siguiente código.   
    }
    //imprime el resultado dentro de la sección allData. .join concatena los elementos de un array.
};

const getOrdervalue = event => {
    const orderValue = event.target.value;

    if (orderValue === 'a-z') {
        let result = window.orderData(dataOrder);
        const card = result.map(element => templateStringForCards(element));
        allData.innerHTML = card.join('');
    } else if (orderValue === 'z-a') {
        let result = window.orderDataZA(dataOrder);
        const card = result.map(element => templateStringForCards(element));
        allData.innerHTML = card.join('');
    }
};

const getSpeciesValue = event => {
    const speciesValue = event.target.value; //Se guarda el valor de los option del html
    if (speciesValue === 'all' || speciesValue === 'species') {
        showData();
    } else {
        const splitSpeciesValue = speciesValue.split('.'); //Toma el filter value y lo divide en un array por el punto. El split detecta el . del nombre del value.
        const key = splitSpeciesValue[0]; //aqui se guarda la propiedad ej. "name"
        const value = splitSpeciesValue[1]; //aqui se guarda el valor ej."Rick"

        let result = window.filterData(key, value, data); //variable vacía que guarda el resultado de la función ya ejecutada
        const card = result.map(element => templateStringForCards(element)); // result = array. .map itera items
        allData.innerHTML = card.join(''); //Al cumplirse con la condición, ejecutar el siguiente código.
    }
};

filterButton.addEventListener('change', getFilterValue);
orderButton.addEventListener('change', getOrdervalue);
speciesButton.addEventListener('change', getSpeciesValue);