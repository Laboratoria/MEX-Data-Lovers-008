//CONST
const catalogButton = document.getElementById('catalog'); // catalog button
const logo = document.getElementById('logo'); // logo element
const data = window.RICKANDMORTY.results; // Call data R&M
const searchInput = document.getElementById('search'); // Search bar
const searchButton = document.getElementById('search-button'); // Search button
const filterButton = document.getElementById('filter'); //Filter options button
const orderButton = document.getElementById('order'); //Order options button 

/*trying to build carousel

 const playCarousel = () => {
     let myIndex = 0;
     let image = document.getElementsByClassName('slide');
     hide images
     for (let i = 0; i < image.length; i++) {
         image[i].style.display = "none";
     }
     reset index to show firtst image
     if (myIndex >= image.length) {
         myIndex = 0;
     }

     image[myIndex].style.display = 'block';
     myIndex++;
     setTimeout(playCarousel, 1000);
 }

 playCarousel();*/

//HIDE & SHOW

const hideSection = id => document.getElementById(id).classList.add('hide');
const showSection = id => document.getElementById(id).classList.remove('hide');

const showCatalog = () => {
    hideSection('landing-page');
    showSection('characters-page');
}

const returnToIndex = () => {
    hideSection('characters-page');
    showSection('landing-page');
}

catalogButton.addEventListener('click', showCatalog);
logo.addEventListener('click', returnToIndex);



// Showing data
const allData = document.getElementById('all-data'); //Section where data is going to appear

//FUNCTION to show data
const showData = () => {
    let items = ''; //Variable vacía donde se imprimira cada elemento del data
    data.forEach(element => {
        items +=
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
    });
    allData.innerHTML = items;
}

showData();
//Function to clear inputs of Search Bar
const eraseSearch = () => searchInput.value = '';

const eraseSearchEnter = () => {
    if (event.keyCode == 13) {
        eraseSearch();
    }
}

searchButton.addEventListener('click', eraseSearch);
searchInput.addEventListener('keyup', eraseSearchEnter);


//Working with filter button
const getFilterValue = event => { 
    let filterValue = event.target.value; //Se guarda el valor de los option del html
    let splitFilterValue = filterValue.split('.'); //Toma el filter value y lo divide en un array por el punto. El split detecta el . del nombre del value.
    let key = splitFilterValue[0];//aqui se guarda la propiedad ej. "name"
    let value = splitFilterValue[1];//aqui se guarda el valor ej."Rick"

    let result = window.filterData(key, value); //variable vacía que guarda el resultado de la función ya ejecutada
    allData.innerHTML = result; //imprime el resultado dentro de la sección allData
}




filterButton.addEventListener('change', getFilterValue);

