export default function retry<T>(callback: () => T, attempts: number): T {
  if (typeof callback !== 'function') {
    throw new TypeError(`Expected a function for 'callback'`);
  }

  if (typeof attempts !== 'number' || !Number.isInteger(attempts) || attempts < 1) {
    throw new TypeError(`The 'attempts' parameter must be a positive integer. Received: ${typeof attempts}`);
  }

  for (let i = 0; i < attempts; i++) {
    try {
      return callback();
    } catch (error: any) {
      if (i === attempts - 1) {
        throw new Error(`Function failed after ${attempts} attempts: ${error.message}`);
      }
    }
  }

  throw new Error('Unexpected error: retry loop completed without success or final throw.');
}