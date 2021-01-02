const intervalBetween = require('../src/intervalBetween');

describe('Interval between tests', () => {
  it('can get the correct of half steps for the interval', () => {
    expect(intervalBetween('G','C')).toBe(5);
    expect(intervalBetween('Gb','Ax')).toBe(5);
  });
});