export default function difference<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter((value: T) => {
    if(arr2.includes(value)) {
      return;
    }
    
    return value;
  });
}