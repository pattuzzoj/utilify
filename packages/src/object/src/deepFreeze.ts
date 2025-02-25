import { isPlainObject } from '@utilify/types';

export default function deepFreeze(obj: Record<string, any>): Record<string, any> {
  const freezedObj = Object.freeze(obj);

  for (const key in freezedObj) {
    if (isPlainObject(obj[key])) {
      deepFreeze(obj[key]);
    }
  }

  return freezedObj;
}
