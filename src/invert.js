
/**
 * @name invert - Takes an interval and calculates the inverse interval to
 * find the note at a descending interval
 * 
 * @param { String } interval - The interval that needs to be inverted
 * 
 * @returns { String } - The inverted interval
 */

module.exports = interval => {

  let splitInterval = interval.split('');
  let number = splitInterval.pop();
  let quality = splitInterval;

  let invertedNumber = number > 1 ? 9 - number : number;
  let invertedQuality = quality
    .map(qualityChar => invertMap[qualityChar])
    .join('');

  return invertedQuality + invertedNumber;
};

/** The quality of the inverted interval */
const invertMap = {
  A: 'd',
  d: 'A',
  m: 'M',
  M: 'm',
  P: 'P',
};
