export default function getInstanceType(value: any): string | null {
  if (value === null || typeof value !== 'object' && typeof value !== 'function') {
    return null;
  }

  const constructor = Object.getPrototypeOf(value)?.constructor;
  return constructor ? constructor.name : null;
}