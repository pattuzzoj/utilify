import { djb2 } from "@utilify/crypto";

export default function memo(callback: (...args: any[]) => any, cacheTimeout?: number): (...args: any[]) => any {
  const cache = new Map();

  return (...args: any[]): any => {
    const key = djb2(JSON.stringify(args));

    if(!cache.has(key)) {
      cache.set(key, callback(...args));

      if(cacheTimeout) {
        setTimeout(() => cache.delete(key), cacheTimeout);
      }
    }
    
    return cache.get(key);
  }
}