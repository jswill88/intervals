const { intervals, notes } = require('./intervalsLib');
const normalize = require('./normalizeNote');
const calculateOffset = require('./calculateOffset');

/**
 * @name between
 * 
 * @description Takes two notes and calculates the 
 * interval between them. 
 * 
 * @param { String } note1 The lower note of the 
 * interval to calculate: 'Bb','C', 'F#', 'Ax'
 * @param { String } note2 The higher note of the 
 * interval to calculate: 'Bb','C', 'F#', 'Ax'
 * 
 * @returns { String } The interval between the two notes. 
 */


module.exports = (note1, note2) => {
  const normalizedNote1 = normalize(note1);
  const normalizedNote2 = normalize(note2);

  // interval number for display
  const noteCode1 = normalizedNote1.charCodeAt(0);
  const noteCode2 = normalizedNote2.charCodeAt(0);
  const codeDiff = noteCode2 - noteCode1 + 1;
  const numForDisplay = codeDiff <= 0 ? codeDiff + 7 : codeDiff;

  const offset = calculateOffset(normalizedNote2, '') - calculateOffset(normalizedNote1, '');

  let noteOneNum = notes[normalizedNote1[0]];
  let noteTwoNum = notes[normalizedNote2[0]];
  if (noteTwoNum < noteOneNum) noteTwoNum += 12;
  let halfStepsBetween = noteTwoNum - noteOneNum + offset;

  let startingPoint = [1, 4, 5].includes(numForDisplay) ? 'P' : 'M';

  let difference = halfStepsBetween - intervals[`${startingPoint}${numForDisplay}`];

  while (difference > 0) {
    switch (startingPoint[0]) {
      case 'P':
        startingPoint = 'A';
        break;
      case 'A':
        startingPoint += 'A';
        break;
      case 'M':
        startingPoint = 'A';
        break;
    }
    difference--;
  }

  while (difference < 0) {
    switch (startingPoint[0]) {
      case 'P':
        startingPoint = 'd';
        break;
      case 'd':
        startingPoint += 'd';
        break;
      case 'M':
        startingPoint = 'm';
        break;
      case 'm':
        startingPoint = 'd';
        break;
    }
    difference++;
  }

  return `${startingPoint}${numForDisplay}`;
};
