require('../src/data.js');


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


describe('filterData', () => { //palabra  contiene las funciones para ejecutar los test.
    it('is a function', () => { // it = palabra contiene el enunciado en caso de que el test sea correcto o no.
        expect(typeof filterData).toBe('function'); //test dentro de la palabra 
    });

    it('returns `Rick Sanchez`', () => { //segunda sentencia
        expect(window.filterData('name', 'Rick', window.RICKANDMORTY.results)[0].name).toBe('Rick Sanchez'); //Llama  filterData. (key, value, data)
    });

    it('returns `There are 44 Mortys`', () => {
        expect(window.filterData('name', 'Morty', window.RICKANDMORTY.results).length).toBe(44);
    });
});

//TEST filterHuman

describe('filterHuman', () => { //describe = continen las funciones para test.
    it('is a function', () => { // it = sentencia del enunciado si es correcto o no.
        expect(typeof filterHumans).toBe('function'); //test dentro de la palabra 
    });

    it('returns `There ere 244 Humans`', () => { //segunda sentencia
        expect(window.filterHumans(window.RICKANDMORTY.results).length).toBe(244); //Llama  filterData. (key, value, data)
    });

    it('returns `Should return Rick Sanchez, Morty Smith and Summer Smith as first humans`', () => {
        expect(window.filterHumans(window.RICKANDMORTY.results)[0].name).toBe('Rick Sanchez');
        expect(window.filterHumans(window.RICKANDMORTY.results)[1].name).toBe('Morty Smith');
        expect(window.filterHumans(window.RICKANDMORTY.results)[2].name).toBe('Summer Smith');
    });
});

//Estadística con porcentajes

describe('statisticsPercentage', () => {
    it('is a function', () => {
        expect(typeof statisticsPercentage).toBe('function');
    });

    it('returns `Should return 15 % when asking porcentage of total Ricks`', () => {
        expect(window.statisticsPercentage('name', 'Rick', window.RICKANDMORTY.results)).toBe(15);
    });

    it('returns`Should return 60% when asking porcentage of Humans`', () => {
        expect(window.statisticsPercentage('species', 'Human', window.RICKANDMORTY.results)).toBe(60);
    });
});

//Estadística con valores
describe('statisticsValue', () => {
    it('is a function', () => {
        expect(typeof statisticsValue).toBe('function');
    });

    it('returns `Should return 372 when asking value of total men`', () => {
        expect(window.statisticsValue('gender', 'Male', window.RICKANDMORTY.results)).toBe(372);
    });

    it('returns`Should return 133 when asking porcentage of Humans`', () => {
        expect(window.statisticsValue('species', 'Alien', window.RICKANDMORTY.results)).toBe(133);
    });
});7

