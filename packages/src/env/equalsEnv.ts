import getEnv from "./getEnv";

export default function equalsEnv(key: string, expected: string | string[]): boolean {
  const value = getEnv(key);
  
  if (Array.isArray(expected)) {
    return expected.includes(value as string);
  }

  return value === expected;
}