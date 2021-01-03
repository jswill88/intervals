const intervalBetween = require('../src/intervalBetween');

describe('Interval between tests', () => {
  it('can handle 1s', () => {
    expect(intervalBetween('A','A')).toBe('P1');
    expect(intervalBetween('B','Bb')).toBe('d1');
    expect(intervalBetween('C', 'C#')).toBe('A1');
  });
  it('can handle 2s', () => {
    expect(intervalBetween('D','Eb')).toBe('m2');
    expect(intervalBetween('E#', 'Fx')).toBe('M2');
    expect(intervalBetween('F', 'Gbb')).toBe('d2');
    expect(intervalBetween('Gb','A#')).toBe('AA2');
  });
  it('can handle 3s', () => {
    expect(intervalBetween('Ab', 'C')).toBe('M3');
    expect(intervalBetween('Bbb','D')).toBe('A3');
    expect(intervalBetween('C#','E')).toBe('m3');
    expect(intervalBetween('D','Fbb')).toBe('dd3');
  });
  it('can handle 4s', () => {
    expect(intervalBetween('E', 'A')).toBe('P4');
    expect(intervalBetween('F#','B#')).toBe('A4');
    expect(intervalBetween('Gb','Cbb')).toBe('d4');
  });
  it('can handle 5s', () => {
    expect(intervalBetween('Ab','Eb')).toBe('P5');
    expect(intervalBetween('B','F')).toBe('d5');
    expect(intervalBetween('Cb','G#')).toBe('AA5');
  });
  it('can handle 6s', () => {
    expect(intervalBetween('D','B')).toBe('M6');
    expect(intervalBetween('E#','C#')).toBe('m6');
    expect(intervalBetween('F','D#')).toBe('A6');
    expect(intervalBetween('Gb','Ebbb')).toBe('d6');
  });
  it('can handle 7s', () => {
    expect(intervalBetween('A','G#')).toBe('M7');
    expect(intervalBetween('Bb','A#')).toBe('A7');
    expect(intervalBetween('C','Bb')).toBe('m7');
    expect(intervalBetween('D#','C')).toBe('d7');
  });
});