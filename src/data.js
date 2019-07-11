let empezar= document.getElementById("img"); //variable para el botón "empezar", que despliega la siguente sección
empezar.addEventListener("click", mostrar) //evento del click para mostrar la sección oculta en la página

function mostrar() { //función para desplegar la segunda sección del documento
    if (document.getElementById) { 
      let activar = document.getElementById("info"); //se crea una variable para ubicar el div a desplegar y se ubica en el HTML
      activar.style.display = (activar.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div con una función ternaria
     
    }
  }
  window.onload = function () {
    //hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente//
    mostrar("info"); //"contenido" es el nombre del DIV
  }

