import isDeno from "./isDeno";

export default function requireEnv(key: string): string {
  let value: string | undefined;
  
  if (isDeno()) {
    // @ts-ignore
    value = Deno.env.get(key);
  } else {
    value = process.env[key];
  }

  if (value === undefined) {
    throw new Error(`Expected a valid value for 'key'`);
  }

  return value;
}