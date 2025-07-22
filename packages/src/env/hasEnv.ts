import isDeno from "./isDeno";

export default function hasEnv(key: string): boolean {
  let value: string | undefined;
  
  if (isDeno()) {
    // @ts-ignore
    value = Deno.env.get(key);
  } else {
    value = process.env[key];
  }

  return value !== undefined;
}