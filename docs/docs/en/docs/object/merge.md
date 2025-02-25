# merge
The `merge` function combines multiple objects or arrays into one. It can merge objects into a single object or arrays into a single array.

## Syntax

```typescript
merge(...values: Record<string, any>[]): Record<string, any>;
merge(...values: any[][]): any[];
merge(...values: any[]): any;
```

### Parameters

| Parameter | Type                          | Description                                                   |
|-----------|-------------------------------|---------------------------------------------------------------|
| `values`  | `Record<string, any>[]`         | An array of objects to merge into a single object.            |
| `values`  | `any[][]`                      | An array of arrays to merge into a single array.              |
| `values`  | `any[]`                        | Multiple objects or arrays to merge, the first determines the result type. |

### Return

| Type                       | Description                                              |
|----------------------------|----------------------------------------------------------|
| `Record<string, any>`       | If the first argument is an object, it returns a merged object. |
| `any[]`                     | If the first argument is an array, it returns a merged array. |
| `any`                       | The merged result, type depends on the input.            |

## Examples

### Example 1: Merging Objects
```typescript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = merge(obj1, obj2);
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }
```

### Example 2: Merging Arrays
```typescript
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArr = merge(arr1, arr2);
console.log(mergedArr); // [1, 2, 3, 4]
```

### Example 3: Merging Mixed Types
```typescript
const obj = { a: 1 };
const arr = [2, 3];
const mergedMixed = merge(obj, arr);
console.log(mergedMixed); // { a: 1, 0: 2, 1: 3 }
```

## Notes
- The function handles merging objects and arrays differently. When merging objects, it combines properties, and when merging arrays, it concatenates them.
- If the input type is mixed (e.g., an array and an object), the resulting type will be an object that combines both.

## Dependencies
None.

## Source Code
::: code-group

```typescript
function merge(...values: Record<string, any>[]): Record<string, any>;
function merge(...values: any[][]): any[];
function merge(...values: any[]): any {
  return values.reduce((merged, obj) => {
    for (const key in obj) {
      merged[key] = obj[key];
    }

    return merged;
  }, Array.isArray(values[0]) ? [] : {});
}
```

```javascript
function merge(...values) {
  return values.reduce((merged, obj) => {
    for (const key in obj) {
      merged[key] = obj[key];
    }

    return merged;
  }, Array.isArray(values[0]) ? [] : {});
}
```
:::

## References
- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)