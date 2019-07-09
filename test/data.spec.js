require('../src/data.js');
require('../src/data/rickandmorty/rickandmorty.js');

describe('filterData', () => {
    it('is a function', () => {
        expect(typeof filterData).toBe('function');
    });

    it('returns `Rick Sanchez`', () => {
        expect(window.filterData('name', 'Rick', window.RICKANDMORTY.results)[0].name).toBe('Rick Sanchez');
    });

    it('returns `Existen 44 Mortys`', () => {
        expect(window.filterData('name', 'Morty', window.RICKANDMORTY.results).length).toBe(44);
    });
});

describe('orderData', () => {
    it('is a function', () => {
        expect(typeof orderData).toBe('function');
    });

    it('returns `Debería de regresar: Abadango Cluster Princess, Abradolf Lincler y Accountant dog como primeros 3 items del arreglo`', () => {
        expect(window.orderData(window.RICKANDMORTY.results)[0].name).toBe('Abadango Cluster Princess');
        expect(window.orderData(window.RICKANDMORTY.results)[1].name).toBe('Abradolf Lincler');
        expect(window.orderData(window.RICKANDMORTY.results)[2].name).toBe('Accountant dog');
    });
});

describe('orderDataZA', () => {
    it('is a function', () => {
        expect(typeof orderDataZA).toBe('function');
    });

    it('returns `example`', () => {
        expect(example()).toBe('example');
    });
});