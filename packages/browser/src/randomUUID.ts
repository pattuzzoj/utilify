import { isServer } from '@utilify/environment';

export default function randomUUID(): string | undefined {
  if (isServer()) return;

  return crypto.randomUUID();
}