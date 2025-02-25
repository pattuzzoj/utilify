# sanitizeObj
The `sanitizeObj` function traverses an object and replaces specific values with a given replacement value.

## Syntax

```typescript
sanitizeObj(obj: Record<string, any>, values: any[], replace?: any): Record<string, any>;
```

### Parameters

| Parameter  | Type                         | Description                                                              |
|------------|------------------------------|--------------------------------------------------------------------------|
| `obj`      | `Record<string, any>`         | The object to be sanitized, where specific values will be replaced.      |
| `values`   | `any[]`                       | An array containing the values to be replaced in the object.             |
| `replace`  | `any`                         | The value that will replace the found values in the object (optional).   |

### Return

| Type                         | Description                                                   |
|------------------------------|---------------------------------------------------------------|
| `Record<string, any>`         | The sanitized object with the replaced values.                |

## Examples

### Example 1: Replacing values in an object
```typescript
const obj = { name: "Alice", age: 30, country: "USA" };
const result = sanitizeObj(obj, ["USA"], "Canada");

console.log(result);
// { name: "Alice", age: 30, country: "Canada" }
```

### Example 2: Replacing values in nested objects
```typescript
const obj = { user: { name: "Alice", country: "USA" }, address: { city: "New York" } };
const result = sanitizeObj(obj, ["USA"], "Canada");

console.log(result);
// { user: { name: "Alice", country: "Canada" }, address: { city: "New York" } }
```

### Example 3: Replacing values with a custom value
```typescript
const obj = { name: "Alice", age: 30, country: "USA" };
const result = sanitizeObj(obj, [30], "Unknown");

console.log(result);
// { name: "Alice", age: "Unknown", country: "USA" }
```

## Notes
- If the `replace` parameter is provided, it will replace the values found in the `values` array within the object.
- The function also handles nested objects and applies replacements recursively.

## Dependencies
- [isPlainObject](./types.md): Checks if the value is a plain object.

## Source Code
::: code-group

```typescript
import { isPlainObject } from '@utilify/types';

function sanitizeObj(obj: Record<string, any>, values: any[], replace?: any): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in obj) {
    if (isPlainObject(obj[key])) {
      result[key] = sanitizeObj(obj[key], values, replace);
    } else if (values.includes(obj[key])) {
      if (replace !== undefined) {
        result[key] = replace;
      }
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}
```

```javascript
function sanitizeObj(obj, values, replace) {
  const result = {};

  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      result[key] = sanitizeObj(obj[key], values, replace);
    } else if (values.includes(obj[key])) {
      if (replace !== undefined) {
        result[key] = replace;
      }
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}
```
:::

## References
- [isPlainObject](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)