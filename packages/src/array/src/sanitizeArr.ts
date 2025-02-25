export default function sanitizeArr<T>(arr: T[], values: T[], replace?: T): T[] {
  const result: T[] = [];

  for (const value of arr) {
    if (values.includes(value)) {
      if (replace !== undefined) {
        result.push(replace);
      }
    } else {
      result.push(value);
    }
  }

  return result;
}