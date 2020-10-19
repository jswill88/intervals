const { intervalMatches } = require('./intervalsLib');

/**
 * @name modifyInterval - Takes an interval input and verifies that it is valid, 
 * and modifies as needed for interval function to work
 * 
 * @param { String } interval Interval to assess
 * 
 * @returns { String } modified interval for interval
 *  function to process
 */
module.exports = (interval) => {
  if (interval.toUpperCase() === 'TT') { return 'A4'; }
  let regex = /^([mMP]|d+|A+)\d+$/;
  
  if (!regex.test(interval)) {
    throw Error('Not a valid interval input. The interval should be a string starting with the interval quality (m,M,P,A,d) followed by a number. "TT" can be used to get a tritone. Repeated "A"s or "d"s can be used to indicate doubly (or more) augmented or diminished intervals');
  }
  
  let quality = interval.match(/[a-z]+/gi)[0];
  let distance = parseInt(interval.match(/\d+/g)[0]);

  let scopedDistance = distance % 7;
  scopedDistance = scopedDistance === 0 ? 7 : scopedDistance;
  
  if(!intervalMatches[quality[0].toUpperCase()].includes(scopedDistance)) {
    throw Error('Not a valid interval input. Major and minor intervals must be 2, 3, 6, 7, or an equivalent extension (9, 11, 13, etc..). Perfect intervals must be 1, 4, 5, 8, or an equivalent extension.');
  }
  /** Still need to handle doubly diminished and augmented */
  
  return quality + scopedDistance;
};

