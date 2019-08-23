require('../src/data.js');
// const LOL =require('../src/data/lol/lol.js');
// const newarrayData =window.data.debugData;
// console.log(newarrayData);
// const arrayDebug =window.data.arrayDebug;
const filterbyletter = window.data.filterbyletter;
const filterByBestChampions = window.data.filterByBestChampions;

const input = [{name: 'Aatrox', title: 'the Darkin Blade', info: { attack: 8, defense: 4, magic: 3, difficulty: 4 }, tags: ['Fighter', 'Tank']},
  {name: 'Bard', title: 'the Wandering Caretaker', info: { attack: 4, defense: 4, magic: 5, difficulty: 9 }, tags: ['Support', 'Mage']},
  {name: 'Caitlyn', title: 'the Sheriff of Piltover', info: { attack: 8, defense: 2, magic: 2, difficulty: 6 }, tags: ['Marksman']},
  {name: 'Darius', title: 'the Hand of Noxus', info: { attack: 9, defense: 5, magic: 1, difficulty: 2 }, tags: ['Fighter', 'Tank']}

];


const output2 = [
  {name: 'Aatrox', title: 'the Darkin Blade', info: { attack: 8, defense: 4, magic: 3, difficulty: 4 }, tags: ['Fighter', 'Tank']},
  {name: 'Bard', title: 'the Wandering Caretaker', info: { attack: 4, defense: 4, magic: 5, difficulty: 9 }, tags: ['Support', 'Mage']},
  {name: 'Caitlyn', title: 'the Sheriff of Piltover', info: { attack: 8, defense: 2, magic: 2, difficulty: 6 }, tags: ['Marksman']},
  {name: 'Darius', title: 'the Hand of Noxus', info: { attack: 9, defense: 5, magic: 1, difficulty: 2 }, tags: ['Fighter', 'Tank']}
];


describe('filterbyletter', ()=>{
  it('Deberìa ser una función', () =>{
    expect(typeof filterbyletter).toBe('function');
  });

  it('deberia retornar de forma ascendente, de A-Z', () => {
    expect(filterbyletter("A", input)).toEqual(output2);
  });
  it('deberia retornar d de forma descendente, de Z-A', () => {
    expect(filterbyletter("Z", output2 )).toEqual(output2);
  });

  });

describe('filterByBestChampions', ()=>{
  it('Deberìa ser una función', () =>{
    expect(typeof filterByBestChampions).toBe('function');
    // console.log(debugData);
  });
  it('debería retornar a los mejores en ataque', () =>{
    expect(filterByBestChampions('attack',input).toEqual(output2));
  });
});