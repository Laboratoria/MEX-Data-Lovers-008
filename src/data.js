let empezar= document.getElementsByClassName("img"); 
for(let i = 0 ; i < empezar.length; i++){
  empezar[i].addEventListener('click', function() {
    mostrar(empezar[i])
})

  var mostrar = function(info) {
    info.style.display = (info.style.display == 'none') ? 'block' : 'none';
}

    window.onload = function () {
      
   
    }


//     let empezar= document.getElementsByClassName("img"); 
// empezar.addEventListener("click", mostrar) 

// var mostrar = function() { 
// //  alert('adsf')
// if (document.getElementsByClassName){
//   const activar = document.getElementsByClassName("info");
//   activar.style.display = (activar.style.display == 'none') ? 'block' : 'none';
// }
// }

//     window.onload = function () {
      
//     mostrar('info')
    }