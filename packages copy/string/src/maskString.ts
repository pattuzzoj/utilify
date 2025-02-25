export default function maskString(str: string, mask: string, maskStart: number, maskLength: number) {
  maskLength = Math.min(maskLength, str.length - maskStart);

  const start = str.slice(0, maskStart);
  const end = str.slice(maskStart + maskLength);
  const masked = mask.repeat(maskLength);

  return start + masked + end;
}