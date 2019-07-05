const data = RICKANDMORTY.results;
console.log(data);

const allAlive = data.filter(element => element.status === "Alive");
console.log(allAlive);

const allDead = data.filter(element => element.status === "Dead");
console.log(allDead);

const allFemale = data.filter(element => element.gender === "Female");
console.log(allFemale);

const allMale = data.filter(element => element.gender === "Male");
console.log(allMale);

const filterName = () => {
  let allRick = data.filter(element => element.name === "Rick Sanchez");
  console.log(allRick);
  return allRick;
}
filterName();

window.allAlive = allAlive;
window.allDead = allDead;
window.allMale = allMale;
window.allFemale = allFemale;

























