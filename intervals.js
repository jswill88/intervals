const notes = {
  A: 0,
  B: 2,
  C: 3,
  D: 5,
  E: 7,
  F: 8,
  G: 10,
};
const intervals = {
  P1: 0,
  A1: 1,
  m2: 1,
  M2: 2,
  m3: 3,
  M3: 4,
  P4: 5,
  A4: 6,
  d5: 6,
  P5: 7,
  m6: 8,
  M6: 9,
  m7: 10,
  M7: 11,
  // P8: 0,
};



module.exports = (note, interval) => { // Cb, M7
  // if (!((interval.split('').pop() - 1) % 7)) {
  //   return note;
  // }
  let newNote = note.charCodeAt(0) +
    parseInt(interval.split('').pop()) - 1;
  if (newNote > 71) { newNote -= 7; }
  newNote = String.fromCharCode(newNote); // B

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
  console.log(change);
  let stop = false;

  let newNoteNum = parseInt(notes[newNote[0]]);
  console.log(newNoteNum)
  let noteNum = parseInt(notes[note[0]]) + change;
  console.log(noteNum);
  let intervalNum = intervals[interval];

  // need less than or equal for some
  if (newNoteNum <= noteNum && note[0] !== newNote[0]) {
    newNoteNum += 12;
  }
  if (change <= 0) {
    
    while (accs(newNoteNum, noteNum)  > intervalNum) {
      stop = true;
      newNote += 'b';
      console.log(newNote);
      noteNum++;
    }

  }
  if (!stop) {

    // if (intervalNum === 12 ) {intervalNum = 0;}
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
// const sharp = (newNote, note, change) => {
//   let result = notes[newNote[0]] - change - notes[note[0]];
//   console.log('result', result);
//   // return result <= 0 ? Math.abs(result) + 12 : result;
//   return result < 0 ? result + 12 : result;
// };
