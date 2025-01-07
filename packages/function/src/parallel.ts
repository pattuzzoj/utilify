export default async function parallel(...callbacks: (() => Promise<any>)[]) {
  return Promise.all(callbacks.map(callback => callback()));
};
