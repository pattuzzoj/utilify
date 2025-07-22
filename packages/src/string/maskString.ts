export default function maskString(str: string, mask: string, maskStart: number, maskLength: number): string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }

  if (typeof mask !== 'string') {
    throw new TypeError(`Expected a string for 'mask'`);
  }

  if (typeof maskStart !== 'number') {
    throw new TypeError(`Expected a number for 'maskStart'`);
  } else if (maskStart < 0) {
    throw new RangeError(`'maskStart' must be >= 0`);
  }

  if (typeof maskLength !== 'number') {
    throw new TypeError(`Expected a number for 'maskLength'`);
  } else if (maskLength < 0) {
    throw new RangeError(`'maskLength' must be >= 0`);
  }

  if (maskStart > str.length) {
    throw new RangeError(`'maskStart' cannot be greater than 'maskLength'`);
  }
  
  maskLength = Math.min(maskLength, str.length - maskStart);

  const start = str.slice(0, maskStart);
  const end = str.slice(maskStart + maskLength);
  const masked = mask.repeat(maskLength);

  return start + masked + end;
}