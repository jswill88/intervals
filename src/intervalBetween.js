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
 * interval to calculate
 * @param { String } note2 The higher note of the 
 * interval to calculate
 */


module.exports = (note1, note2) => {
  const normalizedNote1 = normalize(note1);
  const normalizedNote2 = normalize(note2);

  // interval number for display
  const noteCode1 = normalizedNote1.charCodeAt(0);
  const noteCode2 = normalizedNote2.charCodeAt(0);
  const difference = noteCode2 - noteCode1;
  const numForDisplay = difference < 0 ? difference + 8 : difference;

  const offset = calculateOffset(normalizedNote2,'') - calculateOffset(normalizedNote1,'');
    
  // number of half steps between
  let noteOneNum = notes[normalizedNote1[0]];
  let noteTwoNum = notes[normalizedNote2[0]];
  if (noteTwoNum < noteOneNum) noteTwoNum += 12;
  let halfStepsBetween = noteTwoNum - noteOneNum + offset;

  // intervals['P4'];
  // make opposite interval map
  // find offset of notes 
  // change interval so that it matches offset
  return halfStepsBetween;
};
