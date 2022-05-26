const between = require('../src/between');

describe('Interval between tests', () => {
  it('can handle 1s', () => {
    expect(between('A','A')).toBe('P1');
    expect(between('B','Bb')).toBe('d1');
    expect(between('C', 'C#')).toBe('A1');
  });
  it('can handle 2s', () => {
    expect(between('D','Eb')).toBe('m2');
    expect(between('E#', 'Fx')).toBe('M2');
    expect(between('F', 'Gbb')).toBe('d2');
    expect(between('Gb','A#')).toBe('AA2');
  });
  it('can handle 3s', () => {
    expect(between('Ab', 'C')).toBe('M3');
    expect(between('Bbb','D')).toBe('A3');
    expect(between('C#','E')).toBe('m3');
    expect(between('D','Fbb')).toBe('dd3');
  });
  it('can handle 4s', () => {
    expect(between('E', 'A')).toBe('P4');
    expect(between('F#','B#')).toBe('A4');
    expect(between('Gb','Cbb')).toBe('d4');
  });
  it('can handle 5s', () => {
    expect(between('Ab','Eb')).toBe('P5');
    expect(between('B','F')).toBe('d5');
    expect(between('Cb','G#')).toBe('AA5');
  });
  it('can handle 6s', () => {
    expect(between('D','B')).toBe('M6');
    expect(between('E#','C#')).toBe('m6');
    expect(between('F','D#')).toBe('A6');
    expect(between('Gb','Ebbb')).toBe('d6');
  });
  it('can handle 7s', () => {
    expect(between('A','G#')).toBe('M7');
    expect(between('Bb','A#')).toBe('A7');
    expect(between('C','Bb')).toBe('m7');
    expect(between('D#','C')).toBe('d7');
  });
});
describe('error tests', () => {
  it('will throw an error with bad string', ()  => {
    expect(() => between('J','C')).toThrowError();
    expect(() => between('C','D#b')).toThrowError();
  });
  it('will throw an error with the worng input type', () => {
    expect(() => between(4,'Db')).toThrowError();
    expect(() => between('Bb', {})).toThrowError();
    expect(() => between([], true)).toThrowError();
  });
});