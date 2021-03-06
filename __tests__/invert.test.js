const invert = require('../src/invert');

describe('Invert function tests', () => {
  it('can inverse intervals correctly', () => {
    expect(invert('m6')).toBe('M3');
    expect(invert('M2')).toBe('m7');
    expect(invert('P4')).toBe('P5');
    expect(invert('d1')).toBe('A1');
    expect(invert('P1')).toBe('P1');
  });
  it('can invert doubly diminished and augmented intervals', () => {
    expect(invert('dd4')).toBe('AA5');
    expect(invert('AA2')).toBe('dd7');
  });
});
