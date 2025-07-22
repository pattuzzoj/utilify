export default function djb2(str: string): number {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }
  
  let hash = 5381;
  
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
  }

  return hash >>> 0;
}