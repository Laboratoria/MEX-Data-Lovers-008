require('../src/data.js');


describe('filterData', () => {
    it('is a function', () => {
        expect(typeof filterData).toBe('function');
    });

    it('returns `Rick Sanchez`', () => {
        expect(window.filterData(name, 'Rick', window.RICKANDMORTY)[0]).toBe === ('Rick Sanchez');
    });
});

describe('orderData', () => {
    it('is a function', () => {
        expect(typeof orderData).toBe('function');
    });

    it('returns `example`', () => {
        expect(example()).toBe('example');
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