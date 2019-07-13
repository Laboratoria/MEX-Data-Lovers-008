require('../src/data.js');


/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});*/

//esto es un mock:
const Rick = {
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-137)",
}
}

describe('filterData()', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('debería retornar un arreglo', () => {
    //expect(filterData()).toBe('array');
    expect(filterData([]) instanceof Array).toBe(true);
  });

  it('debería retornar un arreglo de objetos', () => {
    expect(filterData(data,Rick)).toEqual('array');
  });

});
