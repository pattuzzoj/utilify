import { isServer } from '@utilify/environment';

export default function isCryptoAvailable(): boolean | undefined {
  if (isServer()) return;

  return window?.crypto !== undefined;
}