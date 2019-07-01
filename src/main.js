const catalogButton = document.getElementById('catalog');
const logo = document.getElementById('logo');

const hideSection = (id) => {
    document.getElementById(id).classList.add('hide');
}


const showSection = (id) => {
    document.getElementById(id).classList.remove('hide');

}

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