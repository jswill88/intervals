const notes = {
  A: 1,
  B: 3,
  C: 4,
  D: 6,
  E: 8,
  F: 9,
  G: 11,
};
const intervals = {
  P1: 0,
  m2: 1,
  M2: 2,
  m3: 3,
  M3: 4,
  P4: 5,
  a4: 6,
  d5: 6,
  m6: 7,
  M6: 8,
  m7: 9,
  M7: 10,
  P8: 11,
};

module.exports = (note, interval) => {
  let newNote = note.charCodeAt(0) +
    parseInt(interval.split('').pop()) - 1;
  if (newNote > 71) { newNote -= 7; }
  newNote = String.fromCharCode(newNote);
  let change = 0;
  for (let i = 1; i < note.length; i++) {
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
  while (accs(newNote, note, change) > intervals[interval]) {
    newNote += 'b';
    change++;
  }

  let sharpCount = 0;
  while (accs(newNote, note, change) < intervals[interval]) {
    sharpCount++;
    change--;
  }
  let exes = Math.floor(sharpCount / 2);
  let sharps = sharpCount % 2;
  for (let i = 0; i < exes; i++) {
    newNote += 'x';
  }
  for (let i = 0; i < sharps; i++) {
    newNote += '#';
  }
  return newNote;
};

const accs = (newNote, note, change) => {
  let result = notes[newNote[0]] - change - notes[note[0]];
  return result < 0 ? result + 12 : result;
};
