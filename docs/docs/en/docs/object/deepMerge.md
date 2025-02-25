# deepMerge
The `deepMerge` function deeply merges multiple objects or arrays into a single object or array, recursively merging any nested objects or arrays.

## Syntax

```typescript
deepMerge(...values: Record<string, any>[]): Record<string, any>;
deepMerge(...values: any[][]): any[];
deepMerge(...values: any[]): any;
```

### Parameters

| Parameter | Type                          | Description                                                   |
|-----------|-------------------------------|-------------------------------------------------------------|
| `values`  | `Record<string, any>[]`        | A list of objects or arrays to merge deeply.                 |
| `values`  | `any[][]`                      | A list of arrays to merge deeply.                            |
| `values`  | `any[]`                        | A list of values to merge deeply, which can include objects or arrays. |

### Return

| Type                          | Description                                                   |
|-------------------------------|-------------------------------------------------------------|
| `Record<string, any>`          | A deeply merged object with all properties from the provided objects. |
| `any[]`                        | A deeply merged array with all values from the provided arrays. |

## Examples

### Example 1: Deeply Merging Objects
```typescript
const obj1 = { name: "Alice", address: { city: "Wonderland" } };
const obj2 = { age: 25, address: { country: "Fictionland" } };

const mergedObj = deepMerge(obj1, obj2);

console.log(mergedObj);
// { name: "Alice", age: 25, address: { city: "Wonderland", country: "Fictionland" } }
```

### Example 2: Deeply Merging Arrays
```typescript
const arr1 = [1, 2, [3, 4]];
const arr2 = [5, 6, [7, 8]];

const mergedArr = deepMerge(arr1, arr2);

console.log(mergedArr);
// [1, 2, [3, 4], 5, 6, [7, 8]]
```

### Example 3: Merging Nested Objects and Arrays
```typescript
const obj1 = { data: [1, 2], info: { name: "Alice" } };
const obj2 = { data: [3, 4], info: { age: 25 } };

const merged = deepMerge(obj1, obj2);

console.log(merged);
// { data: [3, 4], info: { name: "Alice", age: 25 } }
```

## Notes
- This function recursively merges objects and arrays. If an object or array is found at a certain key, it will recursively merge those values as well.
- Uses `Array.isArray()` to check if a value is an array and `isPlainObject` from `@utilify/types` to check if a value is a plain object.

## Dependencies
- [`@utilify/types`](./types.md): Provides the `isPlainObject` function to check if a value is a plain object.

## Source Code
::: code-group

```typescript
import { isPlainObject } from '@utilify/types';

function deepMerge(...values: Record<string, any>[]): Record<string, any>;
function deepMerge(...values: any[][]): any[];
function deepMerge(...values: any[]): any {
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
```

```javascript
function deepMerge(...values) {
  return values.reduce((merged, obj) => {
    for (const key in obj) {
      if (Array.isArray(obj[key]) || isPlainObject(obj[key])) {
        merged[key] = deepMerge(merged[key], obj[key]);
      } else {
        merged[key] = obj[key];
      }
    }

    return merged;
  }, Array.isArray(values[0]) ? [] : {});
}
```
:::

## References
- [Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [`isPlainObject`](./types.md)