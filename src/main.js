//Variables globales con el acceso a la data para iterar
//Puedo ver el arreglo con 151 objetos (C/U pokemones)
//console.log(pokeData);
//Variables en donde se imprimen los nodos
const cardBox = document.getElementById('card-box');
console.log(cardBox);
const cardResult = document.getElementById('imprime-nodo');
console.log(cardResult);
//Declarar todos los botones que usaremos
const buttonHomePokemones = document.getElementById('pokebola-imprime-todos');
const buttonHelp = document.getElementById('ayuda-modal');
const buttonSearchPokemon = document.getElementById('busca-pokemon');
const buttonAsc = document.getElementById('boton-asc');
const buttonDesc = document.getElementById('boton-desc');
const buttonPokeType = document.getElementById('poison-type');


//Eventos
//a)Evento para imprimir todos los pokemones en la pantalla principal
buttonHomePokemones.addEventListener('click', () => {
    //Escribir un bucle que itere por el arreglo
    for (let i = 0; i < window.getData.length; i++) {
        let pokemonesObject = POKEMON.pokemon[i];
        console.log(pokemonesObject);
        //Crear elementos (html)
        let pokeName = document.createElement('h2');
        let pokeImg = document.createElement('img');
        let pokeType = document.createElement('p');
        //Hacer nodos de los valores
        let pokeNameContent = document.createTextNode(pokemonesObject.name);

        let pokeImgContent = document.createTextNode(pokemonesObject.img);

        let pokeTypeContent = document.createTextNode(Object.values(pokemonesObject.type));

        //Hacer de los contenidos, hijxs de los elementos
        pokeName.appendChild(pokeNameContent);
        pokeName.setAttribute('align', 'center');

        pokeImg.appendChild(pokeImgContent);
        pokeImg.setAttribute('src', pokemonesObject.img);

        pokeType.appendChild(pokeTypeContent);

        cardResult.appendChild(pokeName);
        cardResult.appendChild(pokeImg);
        cardResult.appendChild(pokeType);

        cardBox.appendChild(cardResult);
    }
});

buttonHelp.addEventListener('click', () => {
    alert('funciona');
});

buttonSearchPokemon.addEventListener('click', () => {
    //alert('funcionaaa');

});

buttonAsc.addEventListener('click', () => {
    alert('funciona');
});

buttonDesc.addEventListener('click', () => {
    alert('funciona');
});

//Primer boton de los tipos para ordenar
buttonPokeType.addEventListener('click', () => {
    
});

//Invocaciones