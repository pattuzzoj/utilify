# flattenObj
The `flattenObj` function flattens an object, turning its nested properties into a single level, using a separator to indicate the hierarchy of the keys.

## Syntax

```typescript
flattenObj(obj: Record<string, any>, separator: string = ".", path: string = ''): Record<string, any>;
```

### Parameters

| Parameter | Type                          | Description                                                   |
|-----------|-------------------------------|-------------------------------------------------------------|
| `obj`     | `Record<string, any>`          | The object to be flattened.                                   |
| `separator` | `string`                       | The separator used to create the flattened object's key. The default is `"."`. |
| `path`    | `string`                       | The previous key, used to create the full path. The default is an empty string. |

### Return

| Type                          | Description                                                   |
|-------------------------------|-------------------------------------------------------------|
| `Record<string, any>`          | A flattened object with keys representing the original hierarchy, separated by the delimiter. |

## Examples

### Example 1: Flatten a Simple Object
```typescript
const obj = { name: "Alice", age: 30 };
const flatObj = flattenObj(obj);

console.log(flatObj);
// { name: "Alice", age: 30 }
```

### Example 2: Flatten an Object with Nested Properties
```typescript
const obj = { name: "Alice", address: { city: "Wonderland", street: "Flower Street" } };
const flatObj = flattenObj(obj);

console.log(flatObj);
// { name: "Alice", address.city: "Wonderland", address.street: "Flower Street" }
```

### Example 3: Flatten with a Custom Separator
```typescript
const obj = { name: "Alice", address: { city: "Wonderland", street: "Flower Street" } };
const flatObj = flattenObj(obj, "_");

console.log(flatObj);
// { name: "Alice", address_city: "Wonderland", address_street: "Flower Street" }
```

## Notes
- The function recursively traverses all properties of the object and creates a new object with the "flattened" keys, using the specified separator.
- It uses `isPlainObject` from `@utilify/types` to check if a property is a plain object, ensuring the function flattens nested properties.

## Dependencies
- [`@utilify/types`](./types.md): Provides the `isPlainObject` function to check if a value is a plain object.

## Source Code
::: code-group

```typescript
import { isPlainObject } from '@utilify/types';

function flattenObj(obj: Record<string, any>, separator: string = ".", path: string = ''): Record<string, any> {
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
```

```javascript
function flattenObj(obj, separator = ".", path = "") {
  let flatObj = {};

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
```
:::

## References
- [`isPlainObject`](./types.md)