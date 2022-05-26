const { intervals, notes } = require('./intervalsLib');
const normalize = require('./normalizeNote');
const calculateOffset = require('./calculateOffset');
const calcIntervalQual = require('./calcIntervalQual');

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

  try {

    /** Ensure input types are valid */
    if (!(typeof note1 === 'string' && typeof note2 === 'string')) {
      throw Error('Note arguments must be strings');
    }

    const normalizedNote1 = normalize(note1);
    const normalizedNote2 = normalize(note2);
  
    /** Get interval number to display */
    const noteCode1 = normalizedNote1.charCodeAt(0);
    const noteCode2 = normalizedNote2.charCodeAt(0);
    const codeDiff = noteCode2 - noteCode1 + 1;
    const intervalNum = codeDiff <= 0 ? codeDiff + 7 : codeDiff;
  
    /** Find distance between notes in half steps */
    const offset = calculateOffset(normalizedNote2, '') - calculateOffset(normalizedNote1, '');
    const noteOneNum = notes[normalizedNote1[0]];
    let noteTwoNum = notes[normalizedNote2[0]];
    if (noteTwoNum < noteOneNum) noteTwoNum += 12;
    const halfStepsBetween = noteTwoNum - noteOneNum + offset;
  
    const startInterval = [1, 4, 5].includes(intervalNum) ? 'P' : 'M';
  
    /** Figure out how far to adjust interval based on offset */
    const difference = halfStepsBetween - intervals[`${startInterval}${intervalNum}`];
  
    const intervalQuality = calcIntervalQual(difference, startInterval);
  
    return `${intervalQuality}${intervalNum}`;
    
  } catch (e) {
    console.error(e);
    throw Error(e);
  }
};
