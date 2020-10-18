const intervals = require('../intervals');

describe('Interval tests', () => {
  it('can get a Perfect 1', () => {
    expect(intervals('G', 'P1')).toBe('G');
    // expect(intervals('F#', 'm2')).toBe('G');
    // expect(intervals('Gb', 'm2')).toBe('Abb');
  });
  it('can get a major 2nd', () => {
    expect(intervals('Bb', 'M2')).toBe('C');
    expect(intervals('F#', 'm2')).toBe('G');
    expect(intervals('Gb', 'm2')).toBe('Abb');
  });
});


