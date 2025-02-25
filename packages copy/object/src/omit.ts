export default function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  return (Object.keys(obj) as K[]).reduce((result, key) => {
    if (!keys.includes(key)) {
      (result as T)[key] = obj[key];
    }
    
    return result;
  }, {} as Omit<T, K>);
}
