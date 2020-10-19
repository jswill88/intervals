
/**
 * @name normalizeNote - Takes a note in and makes sure that it is valid. If it is, it returns a
 * formatted note that the interval function can work with
 * 
 * @param { String } note Note to assess
 * 
 * @returns { String } A modified note that the interval function can work with
 *  
 */

module.exports = note => {
  const regex = /^[A-Ga-g]([bB]*|#|[Xx]*#?)$/;
  if(!regex.test(note)) {
    throw Error('Invalid note name. Note must be a letter A-G followed by optional accidentals. Use "b" for flat, "#" for sharp, and "x" for double sharp. Use multiple "b"s for multiple flats and place "x"s before "#"s for multiple sharps. For example, F triple sharp should be written as "Fx#"');
  }
  const normalized = note
    .split('')
    .map((char, i) => i === 0 ? char.toUpperCase() : char.toLowerCase())
    .join('');
  return normalized;
};
