module.exports = interval => {
  
  let splitInterval = interval.split('');
  let number = splitInterval.pop();
  let quality = splitInterval[0];

  let invertedNumber = number > 1 ? 9 - number : number;
  let invertedQuality = invertMap[quality];

  return invertedQuality + invertedNumber;
};

const invertMap = {
  A: 'd',
  d: 'A',
  m: 'M',
  M: 'm',
  P: 'P',
};
