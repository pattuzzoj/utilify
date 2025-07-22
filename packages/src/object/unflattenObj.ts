import isPlainObject from "./isPlainObject";

function parsePath(path: string): string[] {
  const segments: string[] = [];
  let buffer = '';
  let inBrackets = false;

  for (let i = 0; i < path.length; i++) {
    const char = path[i];

    if (char === '[') {
      if (buffer) {
        segments.push(buffer);
        buffer = '';
      }
      inBrackets = true;
      buffer += char;
    } else if (char === ']') {
      buffer += char;
      segments.push(
        /^\[\d+\]$/.test(buffer) ? buffer : buffer.slice(1, -1)
      );
      buffer = '';
      inBrackets = false;
    } else if (char === '.' && !inBrackets) {
      if (buffer) {
        segments.push(buffer);
        buffer = '';
      }
    } else {
      buffer += char;
    }
  }

  if (buffer) {
    segments.push(buffer);
  }

  return segments;
}

export default function unflattenObj(obj: Record<string, any>): any {
  if (!isPlainObject(obj)) return obj;
  if (Object.keys(obj).length === 0) return obj;

  const allArrayKeys = Object.keys(obj).every(key => /^\[\d+\]/.test(key));
  const result: any = allArrayKeys ? [] : {};

  for (const flatKey in obj) {
    if (!Object.hasOwn(obj, flatKey)) continue;

    const segments = parsePath(flatKey);
    if (!segments) continue;

    let current = result;

    for (let i = 0; i < segments.length - 1; i++) {
      const segment = segments[i] as string;
      const isIndex = segment.startsWith('[') && segment.endsWith(']');
      const key = isIndex ? +segment.slice(1, -1) : segment;

      const next = segments[i + 1];
      const nextIsArray = next?.startsWith?.('[') && next.endsWith(']');

      if (!(key in current)) {
        current[key] = nextIsArray ? [] : {};
      }

      current = current[key];
    }

    const lastSegment = segments[segments.length - 1] as string;
    const isLastIndex = lastSegment.startsWith('[') && lastSegment.endsWith(']');
    const lastKey = isLastIndex ? +lastSegment.slice(1, -1) : lastSegment;

    current[lastKey] = obj[flatKey];
  }

  return result;
}
