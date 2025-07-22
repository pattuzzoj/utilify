import equalsEnv from "./equalsEnv";

export default function isDev(): boolean {
  return equalsEnv('NODE_ENV', 'development');
}