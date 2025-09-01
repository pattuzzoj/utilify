/**
* Get the instance type of a value.
* @param {any} value - The value to check.
* @returns {string | null} The instance type of the value, or null if not an object or function.
*/
export default function getInstanceType(value: any): string | null {
  if (value === null || typeof value !== 'object' && typeof value !== 'function') {
    return null;
  }

  const constructor = Object.getPrototypeOf(value)?.constructor;
  return constructor ? constructor.name : null;
}