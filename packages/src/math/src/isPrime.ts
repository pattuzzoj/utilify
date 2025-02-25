export default function isPrime(num: number): boolean {
  if(num < 2) return false;
  if(num === 2) return true;
  if(num % 2 === 0) return false;

  const limit = Math.sqrt(num);

  for (let value = 3; value <= limit; value += 2) {
    if (num % value === 0) {
      return false;
    }
  }

  return true;
}