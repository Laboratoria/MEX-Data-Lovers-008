const catalogButton = document.getElementById('catalog'); // Botón catalogo
const logo = document.getElementById('logo'); // Botón del logo
const data = window.RICKANDMORTY.results; // Llamar la data R&M
const searchInput = document.getElementById('search'); // Barra de búsqueda
const searchButton = document.getElementById('search-button'); // Botón buscar

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



// Showing data first try
const allData = document.getElementById('all-data'); //Sección contenedora de la data

//FUNCIÓN
const showData = () => { 
    let items = ''; //Variable vacía donde se imprimira cada elemento del data
    data.forEach(element => {
        items += 
        `<section class="all-data">
            <div class="data-card">
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
            </div>
        </section>`
    });
    allData.innerHTML = items;
}

showData();

const eraseSearch = () => searchInput.value = '';

const eraseSearchEnter = () => {
    if (event.keyCode == 13) {
        eraseSearch();
    }
}

searchButton.addEventListener('click', eraseSearch);
searchInput.addEventListener('keyup', eraseSearchEnter);