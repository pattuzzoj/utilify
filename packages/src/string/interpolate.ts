import { isNil } from "../types";

export default function interpolate(str: string, data: Record<PropertyKey, any>, pattern: RegExp = /{{(.*?)}}/g): string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }

  return str.replace(pattern, (match, key) => {
    const trimmedKey = key.trim();
    const value = data[trimmedKey];

    if (isNil(value)) {
      return match;
    }

    return String(value);
  });
}
