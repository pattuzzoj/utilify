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