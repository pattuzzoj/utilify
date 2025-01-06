export default function factorial(value: number): number {
  let result = 1;

  for (let num = value; num >= 1; num--) {
    result *= num;
  }

  return result;
}