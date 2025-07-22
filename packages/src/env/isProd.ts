import equalsEnv from "./equalsEnv";

export default function isProd(): boolean {
  return equalsEnv('NODE_ENV', 'production');
}