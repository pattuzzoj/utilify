export default async function sleep(timeout: number): Promise<void> {
  if (typeof timeout !== 'number') {
    throw new TypeError(`Expected a non-negative number for 'timeout'`);
  }
  
  return new Promise((resolve) => setTimeout(() => resolve(), timeout));
}