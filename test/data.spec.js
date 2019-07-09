require('../src/data.js'); //funciones
require('../src/data/rickandmorty/rickandmorty.js'); //data



//TEST filterData

describe('filterData', () => { //describe = palabra reservada que contiene las funciones para ejecutar los test.
    it('is a function', () => { // it = palabra reservada que contiene el enunciado en caso de que el test sea correcto o incorrecto (sentencia).
        expect(typeof filterData).toBe('function'); //test dentro de la palabra reservada expect.
    });

    it('returns `Rick Sanchez`', () => { //segunda sentencia
        expect(window.filterData('name', 'Rick', window.RICKANDMORTY.results)[0].name).toBe('Rick Sanchez'); //Llama la función de filterData. Tiene 3 parametros(key, value, data)
    });

    it('returns `There are 44 Mortys`', () => {
        expect(window.filterData('name', 'Morty', window.RICKANDMORTY.results).length).toBe(44);
    });
});


//TEST orderData

//A-Z
describe('orderData', () => {
    it('is a function', () => {
        expect(typeof orderData).toBe('function');
    });

    it('returns `Should return: Abadango Cluster Princess, Abradolf Lincler y Accountant dog as the firts three items from the array.`', () => {
        expect(window.orderData(window.RICKANDMORTY.results)[0].name).toBe('Abadango Cluster Princess');
        expect(window.orderData(window.RICKANDMORTY.results)[1].name).toBe('Abradolf Lincler');
        expect(window.orderData(window.RICKANDMORTY.results)[2].name).toBe('Accountant dog');
    });
});


//Z-A

describe('orderDataZA', () => {
    it('is a function', () => {
        expect(typeof orderDataZA).toBe('function');
    });

    it('returns `Should return: Zick Zack, Zeta Alpha Rick y Zeep Xanflorp as the firts three items from the array.`', () => {
        expect(window.orderDataZA(window.RICKANDMORTY.results)[0].name).toBe('Zick Zack');
        expect(window.orderDataZA(window.RICKANDMORTY.results)[1].name).toBe('Zeta Alpha Rick');
        expect(window.orderDataZA(window.RICKANDMORTY.results)[2].name).toBe('Zeep Xanflorp');
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
});