import { isPlainObject } from '@utilify/types';

export default function deepMerge(...values: Record<string, any>[]): Record<string, any>;
export default function deepMerge(...values: any[][]): any[];
export default function deepMerge(...values: any[]): any {
  return values.reduce((merged, obj) => {
    for (const key in obj) {
      if(Array.isArray(obj[key]) || isPlainObject(obj[key])) {
        merged[key] = deepMerge(merged[key], obj[key]);
      } else {
        merged[key] = obj[key];
      }
    }

    return merged;
  }, Array.isArray(values[0]) ? [] : {});
}

