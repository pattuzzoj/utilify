import isNaN from "./isNaN";

export default function isFinite(value: number): boolean {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }
  
  return !isNaN(value) && value !== Infinity && value !== -Infinity;
}