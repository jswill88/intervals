const modifyInterval = require('../modifyInterval');

describe('modify interval tests', () => {
  it('can deal with tritone notation', () => {
    expect(modifyInterval('TT')).toBe('A4');
    expect(modifyInterval('tt')).toBe('A4');
  });
  it('throws an error with an invalid input', () => {
    expect(() => modifyInterval('happy')).toThrowError();
  });
  it('throws errors with bad interval', () => {
    expect(() => modifyInterval('P9')).toThrowError();
    expect(() => modifyInterval('m5')).toThrowError();
    expect(() => modifyInterval('A7')).not.toThrowError();
  });
  it('returns the properly scoped interval', () => {
    expect(modifyInterval('m2')).toBe('m2');
    expect(modifyInterval('M13')).toBe('M6');
    expect(modifyInterval('A19')).toBe('A5');
    expect(modifyInterval('P8')).toBe('P1');
    expect(modifyInterval('dd14')).toBe('dd7');
  });
});
