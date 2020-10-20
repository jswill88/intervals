const normalizeNote = require('../src/normalizeNote');

describe('Normalize note tests', () => {
  it('throws errors for bad notes', () => {
    expect(() => normalizeNote('Bb#')).toThrowError();
    expect(() => normalizeNote('#A')).toThrowError();
    expect(() => normalizeNote('gxx#b')).toThrowError();
    expect(() => normalizeNote('bbbb')).not.toThrowError();
    expect(() => normalizeNote('Axxxxx#')).not.toThrowError();
  });
  it('returns a normalized note', () => {
    expect(normalizeNote('A')).toBe('A');
    expect(normalizeNote('b')).toBe('B');
    expect(normalizeNote('dBBb')).toBe('Dbbb');
    expect(normalizeNote('c#')).toBe('C#');
    expect(normalizeNote('fXx#')).toBe('Fxx#');
  });
});