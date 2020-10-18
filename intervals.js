const notes = {
  A: 1,
  B: 3,
  C: 4,
  D: 6,
  E: 8,
  F: 9,
  G: 11,
};

module.exports = (note) => {
  let newNote = note.charCodeAt(0) + 3;
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
  while (accs(newNote, note, change) > 5) {
    newNote += 'b';
    change++;
  }

  let sharpCount = 0;
  while (accs(newNote, note, change) < 5) {
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
