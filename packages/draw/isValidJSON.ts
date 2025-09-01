export default function isValidJSON(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError('Expected a string for `value`');
  }

  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}