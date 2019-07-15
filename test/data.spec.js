//require('../src/data.js');
// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });
const pokemon = require('../src/data.js');

describe('pokemon', () => {
  it('is an object', () => {
    expect(typeof pokemon).toBe('object');
  });

describe('pokemon.filtrar', () => {
  it('is a function', () => {
    expect(typeof window.pokemon.filtrar).toBe('function');
    });
  });
});
