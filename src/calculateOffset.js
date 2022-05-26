
/**
 * @name calculateOffset - Used to figure out how much much longer or 
 * shorter the interval is based on sharps, flats, extra diminished, or 
 * extra augmented
 * 
 * @param { String } note - Iterates through the note to add to offset based on
 * 'b's, '#'s, and 'x's
 * @param { String } interval - Iterates through the interval to add to the 
 * offset based on extra 'd's and 'A's
 * 
 * @returns { Number } offset - This is used to show how many sharps or flats
 * will be needed to add to the final output
 */

module.exports = (note, interval) => {
  let offset = 0;
  for (const accidental of note) {
    switch (accidental) {
      case 'b':
        offset--;
        break;
      case '#':
        offset++;
        break;
      case 'x':
        offset += 2;
        break;
      default:
        break;
    }
  }
  for (let i = 1; i < interval.length - 1; i++) {
    switch (interval[i]) {
      case 'd':
        offset--;
        break;
      case 'A':
        offset++;
        break;
      default:
        break;
    }
  }
  return offset;
};
