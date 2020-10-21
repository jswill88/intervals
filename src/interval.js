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
    /** Ensure input types are valid */
    if (!(typeof note === 'string' && typeof interval === 'string')) {
      throw Error('Note and interval arguments must be strings');
    }

    if (direction) {
      if (!['up', 'down', 'ascending', 'descending'].includes(direction)) {
        throw Error('Direction must be "up", "down", "ascending", or "descending". The default is "up"');
      }
    }

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
    for (let i = 1; i < scopedInterval.length - 1; i++) {
      switch (scopedInterval[i]) {
        case 'd':
          change--;
          break;
        case 'A':
          change++;
          break;
        default:
          break;
      }
    }

    let newNoteNum = parseInt(notes[newNote[0]]);
    let noteNum = parseInt(notes[normalizedNote[0]]) + change;

    /**  For doubly diminished and augmented intervals, 
     * this ensures that an correctly formatted interval 
     * will used to check against the interval map
    */
    let baseInterval = scopedInterval[0] + scopedInterval[scopedInterval.length - 1];
    let intervalNum = intervals[baseInterval];

    if (newNoteNum <= noteNum && normalizedNote[0] !== newNote[0]) {
      newNoteNum += 12;
    }

    while (newNoteNum - noteNum > intervalNum) {
      newNote += 'b';
      noteNum++;
    }

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

    return newNote;

  } catch (e) {

    console.error(e.message);
    throw Error(e);

  }
};

