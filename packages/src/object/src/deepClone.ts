import { isPlainObject } from '@utilify/types';

export default function deepClone<T extends Record<string, any>>(value: T): T;
export default function deepClone<T extends any[]>(value: T): T;
export default function deepClone<T>(value: T): T {
  const clonedValue = Array.isArray(value) ? ([] as T) : ({} as T);

  for (const key in value) {
    if (Array.isArray(value[key]) || isPlainObject(value[key])) {
      clonedValue[key] = deepClone(value[key] as any);
    } else {
      clonedValue[key] = value[key];
    }
  }

  return clonedValue;
}