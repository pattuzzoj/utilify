import equalsEnv from "./equalsEnv";

export default function isTest(): boolean {
  return equalsEnv('NODE_ENV', 'test');
}