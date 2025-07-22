export default function charCount(str: string, char: string): number {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }

  if (typeof char !== 'string' || char.length !== 1) {
    throw new TypeError(`Expected a single character string for 'char'`);
  }

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  
  return count;
}