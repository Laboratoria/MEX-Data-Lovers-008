//Tendrás también que completar las pruebas unitarias de las funciones implementadas en el archivo data.js.
require('../src/data.js');


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
