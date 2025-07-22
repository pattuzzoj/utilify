import isDeno from "./isDeno";

export default function getEnv(key: string, fallback?: string): string | undefined {
  let value: string | undefined;
  
  if (isDeno()) {
    // @ts-ignore
    value = Deno.env.get(key);
  } else {
    value = process.env[key];
  }

  return value ?? fallback;
}