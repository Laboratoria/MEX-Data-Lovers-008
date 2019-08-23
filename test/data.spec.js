require('../src/data.js');


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

//Test filterByType
describe('filterByType', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });
});

