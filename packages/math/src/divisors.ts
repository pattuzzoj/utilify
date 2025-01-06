export default function divisors(num: number): number[] {
  const divisors = [1];
  const limit = Math.sqrt(num);

  for (let index = 2; index <= limit; index++) {
    if(num % index === 0) {
      divisors.push(index);

      if(index != num / index) {
        divisors.push(num / index);
      }
    }
  }

  divisors.push(num);

  return divisors.sort((a, b) => a - b);
}