const { intervals, notes } = require('./intervalsLib');

/**
 * Interval function - Finds a note at the given interval from
 * a note input
 * 
 * @param {String} note The starting note of the interval eg 'Bb'
 * @param {String} interval The type of interval eg 'M6'
 * 
 * @returns {String} Note name at the interval distance from note input
 */
module.exports = (note, interval) => { 

  let noteCode = note.charCodeAt(0) +
    parseInt(interval.split('').pop()) - 1;
  if (noteCode > 71) { noteCode -= 7; }
  let newNote = String.fromCharCode(noteCode); 

  let change = 0;
  for (let i = 1; i < note.length; i++) {
    // refactor to switch
    if (note[i] === 'b') {
      change--;
    }
    if (note[i] === '#') {
      change++;
    }
    if (note[i] === 'x') {
      change += 2;
    }
  }

  let stop = false;

  let newNoteNum = parseInt(notes[newNote[0]]);
  let noteNum = parseInt(notes[note[0]]) + change;
  let intervalNum = intervals[interval];

  if (newNoteNum <= noteNum && note[0] !== newNote[0]) {
    newNoteNum += 12;
  }
  if (change <= 0) {
    
    while (accs(newNoteNum, noteNum)  > intervalNum) {
      stop = true;
      newNote += 'b';
      noteNum++;
    }

  }
  if (!stop) {
    let sharpCount = 0;
    while (accs(newNoteNum, noteNum) < intervalNum) {
      sharpCount++;
      noteNum--;
    }
    let exes = Math.floor(sharpCount / 2);
    let sharps = sharpCount % 2;
    for (let i = 0; i < exes; i++) {
      newNote += 'x';
    }
    for (let i = 0; i < sharps; i++) {
      newNote += '#';
    }
  }
  return newNote;
};

const accs = (newNote, note) => {
  let result = newNote - note;
  return result;
};

