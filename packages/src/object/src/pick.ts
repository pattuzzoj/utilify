export default function pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((picked, key) => {
    if (key in obj) {
      picked[key] = obj[key];
    }

    return picked;
  }, {} as Pick<T, K>);
}
