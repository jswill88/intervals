
/**
 * @name calcIntervalQual
 * 
 * @description Adjusts the interval quality based on how many half steps 
 * away it is from the target
 * 
 * @param { Number } difference The amount the interval needs to expand or
 * contract to match
 * @param { String } intervalType The starting interval type.
 * 
 * @returns { String } The updated and finalized interval type.
 */
module.exports = (difference, intervalType) => {

  while (difference > 0) {
    switch (intervalType[0]) {
      case 'P':
        intervalType = 'A';
        break;
      case 'A':
        intervalType += 'A';
        break;
      case 'M':
        intervalType = 'A';
        break;
    }
    difference--;
  }

  while (difference < 0) {
    switch (intervalType[0]) {
      case 'P':
        intervalType = 'd';
        break;
      case 'd':
        intervalType += 'd';
        break;
      case 'M':
        intervalType = 'm';
        break;
      case 'm':
        intervalType = 'd';
        break;
    }
    difference++;
  }
  return intervalType;
};
