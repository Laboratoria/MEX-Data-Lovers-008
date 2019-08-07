const roleBtn = document.getElementsByClassName('roleBtn');
// console.log(roleBtn);
for (let index = 0; index < roleBtn.length; index++) {
  roleBtn[index].addEventListener ('click', ()=> {
    //   document.getElementById('allAvatar').innerHTML= "Hola";
    allAvatar.style.display = 'none'
    const idTarget = event.target.id;
    const roleClick = newArray.filter(championRole => championRole.tags[0] == idTarget || championRole.tags[1] == idTarget);
    // console.log(roleClick);
    printByRole(roleClick)
  })
}

