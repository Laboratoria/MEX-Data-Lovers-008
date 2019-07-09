// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example

//descomentar para mostrar data//
const root = document.getElementById('root')


const data = RICKANDMORTY.results
let str = ''
data.forEach(element => {
  let name = element.name
  let origin = element.origin.name
  let species = element.species
  let image = element.image
  let status = element.estatus
  let gener = element.gener
  str +=  `<div class="fondo">
  <h3 class = "prueba">${name}</h3>
  <p class="prueba">${origin}</p>
  <p>${species}</p>
  <img src=${image} alt="">
  <p> ${status}</p>
  <p> ${gener}</p>
</div>`

});

//funcion para menu//
root.innerHTML = str

$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}
