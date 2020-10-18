const intervals = require('../intervals');

describe('Interval tests', () => {
  it('can get a Perfect 1', () => {
    expect(intervals('G', 'P1')).toBe('G');
    expect(intervals('Cx', 'P1')).toBe('Cx');
    expect(intervals('Ebb', 'P1')).toBe('Ebb');
  });
  it('can get a minor 2nd', () => {
    expect(intervals('A#', 'm2')).toBe('B');
    expect(intervals('Cb', 'm2')).toBe('Dbb');
    expect(intervals('D', 'm2')).toBe('Eb');
  });
  it('can get a major 2nd', () => {
    expect(intervals('Bb', 'M2')).toBe('C');
    expect(intervals('F#', 'm2')).toBe('G');
    expect(intervals('Gb', 'm2')).toBe('Abb');
  });
  it('can get a minor 3rd', () => {
    expect(intervals('E#', 'm3')).toBe('G#');
    expect(intervals('F', 'm3')).toBe('Ab');
    expect(intervals('Gx', 'm3')).toBe('B#');
  });
  it('can get a major 3rd', () => {
    expect(intervals('Ab', 'M3')).toBe('C');
    expect(intervals('Bbb', 'M3')).toBe('Db');
  });
  it('can get a perfect 4th', () => {
    expect(intervals('C', 'P4')).toBe('F');
    expect(intervals('Dx', 'P4')).toBe('Gx');
  });
  it('can get an augmented 4th', () => {
    expect(intervals('Eb', 'A4')).toBe('A');
    expect(intervals('F#', 'A4')).toBe('B#');
  });
  it('can get an diminished 5th', () => {
    expect(intervals('G', 'd5')).toBe('Db');
    expect(intervals('A#', 'd5')).toBe('E');
  });
  it('can get a perfect 5th', () => {
    expect(intervals('B', 'P5')).toBe('F#');
    expect(intervals('Cbb', 'P5')).toBe('Gbb');
  });
  it('can get a minor 6th', () => {
    expect(intervals('D#', 'm6')).toBe('B');
    expect(intervals('Ex', 'm6')).toBe('Cx');
  });
  it('can get a Major 6th', () => {
    expect(intervals('F', 'M6')).toBe('D');
    expect(intervals('Gb', 'M6')).toBe('Eb');
  });
  it('can get a minor 7th', () => {
    expect(intervals('Abb', 'm7')).toBe('Gbb');
    expect(intervals('B', 'm7')).toBe('A');
  });
  it('can get a major 7th', () => {
    expect(intervals('Cb', 'M7')).toBe('Bb');
    expect(intervals('D#', 'M7')).toBe('Cx');
    expect(intervals('F', 'M7')).toBe('E');
    expect(intervals('Gx', 'M7')).toBe('Fx#');
  });
  it.skip('can get a perfect octave', () => {
    expect(intervals('A#', 'P8')).toBe('A#');
    expect(intervals('B', 'P8')).toBe('B');
    expect(intervals('Cb', 'P8')).toBe('Cb');
    expect(intervals('Dx', 'P8')).toBe('Dx');
  });
});

it('can get a aug 1', () => {
  expect(intervals('C', 'A1')).toBe('C#');

});

