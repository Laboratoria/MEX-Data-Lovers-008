const catalogButton = document.getElementById('catalog');
const logo = document.getElementById('logo');
const data = window.RICKANDMORTY.results;
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');
//trying to build carousel

/*const playCarousel = () => {
     let myIndex = 0;
     let image = document.getElementsByClassName('slide');
     //hide images
     for (let i = 0; i < image.length; i++) {
         image[i].style.display = "none";
         }
    // reset index to show firtst image
   if (myIndex >= image.length) {
         myIndex = 0;
     }

    image[myIndex].style.display = 'block';
    myIndex++;
     setTimeout(playCarousel, 1000);
}

 playCarousel(); */

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
const allData = document.getElementById('all-data');

const showData = () => {
    let items = '';
    data.forEach(element => {
        items += `<section class="all-data">
        <img src="${element.image}" />
        <p> ${element.name}</p>
        <p>Especie: ${element.species}</p>
        <p>Dimensión: ${element.origin.name}</p>
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