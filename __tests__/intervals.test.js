const interval = require('../src/interval');

describe('Interval tests', () => {
  it('can get a Perfect 1', () => {
    expect(interval('G', 'P1')).toBe('G');
    expect(interval('Cx', 'P1')).toBe('Cx');
    expect(interval('Ebb', 'P1')).toBe('Ebb');
  });
  it('can get a minor 2nd', () => {
    expect(interval('A#', 'm2')).toBe('B');
    expect(interval('Cb', 'm2')).toBe('Dbb');
    expect(interval('D', 'm2')).toBe('Eb');
  });
  it('can get a major 2nd', () => {
    expect(interval('Bb', 'M2')).toBe('C');
    expect(interval('F#', 'm2')).toBe('G');
    expect(interval('Gb', 'm2')).toBe('Abb');
  });
  it('can get a minor 3rd', () => {
    expect(interval('E#', 'm3')).toBe('G#');
    expect(interval('F', 'm3')).toBe('Ab');
    expect(interval('Gx', 'm3')).toBe('B#');
  });
  it('can get a major 3rd', () => {
    expect(interval('Ab', 'M3')).toBe('C');
    expect(interval('Bbb', 'M3')).toBe('Db');
  });
  it('can get a perfect 4th', () => {
    expect(interval('C', 'P4')).toBe('F');
    expect(interval('Dx', 'P4')).toBe('Gx');
  });
  it('can get an augmented 4th', () => {
    expect(interval('Eb', 'A4')).toBe('A');
    expect(interval('F#', 'A4')).toBe('B#');
  });
  it('can get a tritone', () => {
    expect(interval('A', 'TT')).toBe('D#');
    expect(interval('B', 'tt')).toBe('E#');
  });
  it('can get an diminished 5th', () => {
    expect(interval('G', 'd5')).toBe('Db');
    expect(interval('A#', 'd5')).toBe('E');
  });
  it('can get a perfect 5th', () => {
    expect(interval('B', 'P5')).toBe('F#');
    expect(interval('Cbb', 'P5')).toBe('Gbb');
  });
  it('can get a minor 6th', () => {
    expect(interval('D#', 'm6')).toBe('B');
    expect(interval('Ex', 'm6')).toBe('Cx');
  });
  it('can get a Major 6th', () => {
    expect(interval('F', 'M6')).toBe('D');
    expect(interval('Gb', 'M6')).toBe('Eb');
  });
  it('can get a minor 7th', () => {
    expect(interval('Abb', 'm7')).toBe('Gbb');
    expect(interval('B', 'm7')).toBe('A');
  });
  it('can get a major 7th', () => {
    expect(interval('Cb', 'M7')).toBe('Bb');
    expect(interval('D#', 'M7')).toBe('Cx');
    expect(interval('F', 'M7')).toBe('E');
    expect(interval('Gx', 'M7')).toBe('Fx#');
  });
  it('can get a perfect octave', () => {
    expect(interval('A#', 'P8')).toBe('A#');
    expect(interval('B', 'P8')).toBe('B');
    expect(interval('Cb', 'P8')).toBe('Cb');
    expect(interval('Dx', 'P8')).toBe('Dx');
  });
});

describe('augmented and diminished tests', () => {
  it('can get a dim 1', () => {
    expect(interval('A', 'd1')).toBe('Ab');
    expect(interval('Bb', 'd1')).toBe('Bbb');
    expect(interval('Bx', 'd1')).toBe('B#');
  });
  it('can get a aug 1', () => {
    expect(interval('C', 'A1')).toBe('C#');
    expect(interval('D#', 'A1')).toBe('Dx');
  });
  it('can get a diminished 2', () => {
    expect(interval('Eb', 'd2')).toBe('Fbb');
    expect(interval('Fbb', 'd2')).toBe('Gbbbb');
  });
  it('can get an augmented 2', () => {
    expect(interval('Gx', 'A2')).toBe('Ax#');
    expect(interval('A', 'A2')).toBe('B#');
  });
  it('can get an diminished 3', () => {
    expect(interval('B#', 'd3')).toBe('D');
    expect(interval('C', 'd3')).toBe('Ebb');
  });
  it('can get an augmented 3', () => {
    expect(interval('D', 'A3')).toBe('Fx');
    expect(interval('Eb', 'A3')).toBe('G#');
  });
  it('can get an diminished 4', () => {
    expect(interval('F', 'd4')).toBe('Bbb');
    expect(interval('G#', 'd4')).toBe('C');
  });
  it('can get an augmented 5', () => {
    expect(interval('A', 'A5')).toBe('E#');
    expect(interval('Bb', 'A5')).toBe('F#');
  });
  it('can get an diminished 6', () => {
    expect(interval('C', 'd6')).toBe('Abb');
    expect(interval('Db', 'd6')).toBe('Bbbb');
  });
  it('can get an augmented 6', () => {
    expect(interval('E', 'A6')).toBe('Cx');
    expect(interval('F', 'A6')).toBe('D#');
  });
  it('can get a diminished 7', () => {
    expect(interval('Gb', 'd7')).toBe('Fbb');
    expect(interval('A', 'd7')).toBe('Gb');
  });
  it('can get an augmented 7', () => {
    expect(interval('B', 'A7')).toBe('Ax');
    expect(interval('Cb', 'A7')).toBe('B');
  });
});

describe('Errors', () => {
  expect(() => interval('A', 'happy')).toThrowError();
  expect(() => interval('A', 'M4')).toThrowError();
  expect(() => interval(4, 'P4')).toThrowError();
  expect(() => interval('Bb', {})).toThrowError();
  expect(() => interval('A', 'P1', 'hug')).toThrowError();
  expect(() => interval('A', 'P1', 5)).toThrowError();
  expect(() => interval('A', 'P1', 'up')).not.toThrowError();
  expect(() => interval('A', 'P1', 'ascending')).not.toThrowError();
});

describe('It works with intervals greater than an octave', () => {
  it('can handle 9s', () => {
    expect(interval('A', 'm9')).toBe('Bb');
    expect(interval('B', 'M9')).toBe('C#');
  });
  it('can handle 11s', () => {
    expect(interval('C', 'A11')).toBe('F#');
    expect(interval('Db', 'P11')).toBe('Gb');
  });
  it('can handle 13s', () => {
    expect(interval('E#', 'M13')).toBe('Cx');
    expect(interval('Fb', 'm13')).toBe('Dbb');
  });
});

describe('Tests for intervals down', () => {
  it('can do 2nds through 5ths down', () => {
    expect(interval('Ab', 'm2', 'down')).toBe('G');
    expect(interval('B', 'M3', 'descending')).toBe('G');
    expect(interval('Dx', 'd4', 'descending')).toBe('Ax#');
    expect(interval('Cb', 'P5', 'descending')).toBe('Fb');
  });
  it('can do 6ths and 7ths down', () => {
    expect(interval('E', 'A6', 'down')).toBe('Gb');
    expect(interval('F', 'M7', 'descending')).toBe('Gb');
  });
});

describe('Tests for doubly diminished and augmented', () => {
  it('can handle doubly diminished intervals', () => {
    expect(interval('C#', 'dd4', 'up')).toBe('Fb');
    expect(interval('A', 'dd2')).toBe('Bbbb');
  });
  it('can handle doubly augmented intervals', () => {
    expect(interval('Gb', 'AA3')).toBe('B#');
    expect(interval('D', 'AA7')).toBe('Cx#');
  });
  it('can handle inverted doubly diminished', () => {
    expect(interval('E', 'dd4', 'down')).toBe('Bx');
    expect(interval('Fb', 'dd7', 'descending')).toBe('G#');
  });
  it('can handle inverted doubly augmented', () => {
    expect(interval('B', 'AA1', 'down')).toBe('Bbb');
    expect(interval('Ab', 'AA3', 'down')).toBe('Fbbb');
  });
});

