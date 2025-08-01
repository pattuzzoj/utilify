export default async function parallel(...callbacks: (() => Promise<any>)[]): Promise<any[]> {
  if (!callbacks.every(callback => typeof callback === 'function')) {
    throw new TypeError(`Expect an array of functions for 'callbacks'`);
  }

  return Promise.all(callbacks.map(callback => callback()));
};