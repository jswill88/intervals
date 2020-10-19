const { intervals, notes } = require('./intervalsLib');
const modifyInterval = require('./modifyInterval');
const normalizeNote = require('./normalizeNote');
const invert = require('./invert');

/**
 * @name interval
 * @description Finds a note at the given interval from
 * a note input
 * 
 * @param { String } note The starting note of the interval: 
 * 'Bb', 'a', 'C#', 'Fx'
 * @param { String } interval The type of interval: 'M6', 'm3',
 * 'A5', 'd7', 'P4'. Interval quality is case sensitive
 * @param { String } [direction = 'up'] - The direction of the 
 * interval. Pass 'down' or 'descending' as third argument to 
 * get a descending interval
 * 
 * @returns { String } Note name at the interval distance from note input
 */

module.exports = (note, interval, direction) => {
  try {
    // make sure note and interval are strings

    // make sure direction is up down ascending descending

    // write tests for intervals down

    const normalizedNote = normalizeNote(note);
    let scopedInterval = modifyInterval(interval);

    if (direction === 'down' || direction === 'descending') {
      scopedInterval = invert(scopedInterval);
    }

    let noteCode = normalizedNote.charCodeAt(0) +
      parseInt(scopedInterval.split('').pop()) - 1;
    if (noteCode > 71) { noteCode -= 7; }
    let newNote = String.fromCharCode(noteCode);

    let change = 0;
    for (const accidental of normalizedNote) {
      switch (accidental) {
        case 'b':
          change--;
          break;
        case '#':
          change++;
          break;
        case 'x':
          change += 2;
          break;
        default:
          break;
      }
    }

    let stop = false;

    let newNoteNum = parseInt(notes[newNote[0]]);
    let noteNum = parseInt(notes[normalizedNote[0]]) + change;
    let intervalNum = intervals[scopedInterval];

    if (newNoteNum <= noteNum && normalizedNote[0] !== newNote[0]) {
      newNoteNum += 12;
    }
    if (change <= 0) {

      while (newNoteNum - noteNum > intervalNum) {
        stop = true;
        newNote += 'b';
        noteNum++;
      }

    }

    if (!stop) {
      let sharpCount = 0;
      while (newNoteNum - noteNum < intervalNum) {
        sharpCount++;
        noteNum--;
      }
      let doubles = Math.floor(sharpCount / 2);
      let sharps = sharpCount % 2;
      for (let i = 0; i < doubles; i++) {
        newNote += 'x';
      }
      for (let i = 0; i < sharps; i++) {
        newNote += '#';
      }
    }
    return newNote;

  } catch (e) {

    console.error(e.message);
    throw Error(e);

  }
};


