import { isPlainObject } from '@utilify/types';

export default function flattenObj(obj: Record<string, any>, separator: string = ".", path: string = ''): Record<string, any> {
  let flatObj: Record<string, any> = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newPath = path ? `${path}${separator}${key}` : key;
      
      if (isPlainObject(obj[key])) {
        Object.assign(flatObj, flattenObj(obj[key], separator, newPath));
      } else {
        flatObj[newPath] = obj[key];
      }
    }
  }

  return flatObj;
}