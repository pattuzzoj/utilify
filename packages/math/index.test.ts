import {
  average,
  clamp,
  divisors,
  factorial,
  fibonacci,
  frequency,
  isBetween,
  isEven,
  isOdd,
  isPrime,
  random,
  round,
  sum,
  sumOfDigits
} from "./src";

describe("Math Utility Functions", () => {
  test("average", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
    expect(average([])).toBe(0);
  });

  test("clamp", () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(0, 1, 10)).toBe(1);
    expect(clamp(15, 1, 10)).toBe(10);
  });

  test("divisors", () => {
    expect(divisors(12)).toEqual([1, 2, 3, 4, 6, 12]);
    expect(divisors(13)).toEqual([1, 13]);
  });

  test("factorial", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
  });

  test("fibonacci", () => {
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(10)).toBe(55);
  });

  test("frequency", () => {
    expect(frequency([1, 2, 2, 3, 3, 3])).toEqual({ "1": 1, "2": 2, "3": 3 });
  });

  test("isBetween", () => {
    expect(isBetween(5, 1, 10)).toBe(true);
    expect(isBetween(0, 1, 10)).toBe(false);
  });

  test("isEven", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(5)).toBe(false);
  });

  test("isOdd", () => {
    expect(isOdd(5)).toBe(true);
    expect(isOdd(4)).toBe(false);
  });

  test("isPrime", () => {
    expect(isPrime(7)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(31)).toBe(true);
  });

  test("random", () => {
    const value = random(1, 10);
    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(10);
  });

  test("round", () => {
    expect(round(5.56789, 2)).toBe(5.56);
    expect(round(5.56789, 0)).toBe(5);
  });

  test("sum", () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
    expect(sum([])).toBe(0);
  });

  test("sumOfDigits", () => {
    expect(sumOfDigits(12345)).toBe(15);
    expect(sumOfDigits(0)).toBe(0);
  });
});
