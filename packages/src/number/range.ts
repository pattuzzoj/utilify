/**
 * Generates an array of numbers in a range with a given step.
 * @param {number} start - The start value.
 * @param {number} end - The end value (exclusive).
 * @param {number} [step=1] - The step value.
 * @returns {number[]} The array of numbers in the range.
 * @throws {TypeError|Error} If arguments are invalid.
 */
export default function range(start: number, end: number, step: number = 1): number[] {
  if (typeof start !== 'number') {
    throw new TypeError(`Expected a number for 'start'`);
  } 
  
  if (typeof end !== 'number') {
    throw new TypeError(`Expected a number for 'end'`);
  } 
  
  if (typeof step !== 'number') {
    throw new TypeError(`Expected a number for 'step'`);
  }
  
  if (step === 0) {
    throw new Error("step cannot be zero");
  }
  
  const result: number[] = [];
  
  if (step > 0) {
    for (let index = start; index < end; index += step) {
      result.push(Math.trunc(index * 100) / 100);
    }
  } else {
    for (let index = start; index > end; index += step) {
      result.push(index);
    }
  }

  return result;
}