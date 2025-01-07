export default function merge(...values: Record<string, any>[]): Record<string, any>;
export default function merge(...values: unknown[][]): unknown[];
export default function merge(...values: any[]): any {
  return values.reduce((merged, obj) => {
    for (const key in obj) {
      merged[key] = obj[key];
    }

    return merged;
  }, Array.isArray(values[0]) ? [] : {});
}