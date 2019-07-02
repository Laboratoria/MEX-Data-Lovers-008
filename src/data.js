function showMenu() {
  
  if (opciones.classList.contains("disabled-menu")){
    opciones.classList.remove("disabled-menu");
    opciones.classList.add("enabled-menu")
  }
  else{
    opciones.classList.remove("enables-menu");
    opciones.classList.add("disabled-menu")
  }

}

hamburguesa.addEventListener("click",showMenu);
