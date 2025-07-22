export default function pick<T extends Record<PropertyKey, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((picked, key) => {
    if (Object.hasOwn(obj, key)) {
      picked[key] = obj[key];
    }

    return picked;
  }, {} as Pick<T, K>);
}