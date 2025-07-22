export default function frequency(arr: any[]): Record<PropertyKey, number> {
  if (!Array.isArray(arr)) {
    throw new TypeError(`Expected an array for 'arr'`);
  }
  
  return arr.reduce((acc, item) => {
    acc[String(item)] = (acc[String(item)] || 0) + 1;
    return acc;
  }, {} as Record<PropertyKey, number>);
}