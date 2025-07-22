export default function set<T extends Record<PropertyKey, any>>(obj: T, path: string | string[], value: any): T {
  const keys = Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, '.$1').split('.');

  let current = obj;
  const parentKeys = keys.slice(0, -1);
  const lastKey = keys[keys.length - 1];

  for (const key of parentKeys) {
    if (!Object.hasOwn(current, key)) {
      (current as any)[key] = {};
    }

    current = current[key];
  }

  (current as any)[lastKey!] = value;

  return obj;
}