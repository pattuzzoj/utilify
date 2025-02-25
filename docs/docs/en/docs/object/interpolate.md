# interpolate
The `interpolate` function replaces placeholders in the string values of an object with corresponding values from a data object.

## Syntax

```typescript
interpolate<T extends Record<string, any>>(obj: T, data: Record<string, any>): T;
```

### Parameters

| Parameter | Type                          | Description                                                   |
|-----------|-------------------------------|-------------------------------------------------------------|
| `obj`     | `Record<string, any>`          | The object containing string values with placeholders to be replaced. |
| `data`    | `Record<string, any>`          | The data object containing the values to replace the placeholders. |

### Return

| Type                          | Description                                                   |
|-------------------------------|-------------------------------------------------------------|
| `T`                             | The object with interpolated string values. |

## Examples

### Example 1: Basic String Interpolation
```typescript
const obj = { name: "Hello {{name}}", age: "Age: {{age}}" };
const data = { name: "Alice", age: 30 };
const result = interpolate(obj, data);

console.log(result);
// { name: "Hello Alice", age: "Age: 30" }
```

### Example 2: Interpolating Nested Objects
```typescript
const obj = { user: { name: "Hello {{name}}", age: "Age: {{age}}" } };
const data = { name: "Alice", age: 30 };
const result = interpolate(obj, data);

console.log(result);
// { user: { name: "Hello Alice", age: "Age: 30" } }
```

### Example 3: Missing Placeholder in Data
```typescript
const obj = { greeting: "Hello {{name}}, welcome to {{place}}!" };
const data = { name: "Alice" };
const result = interpolate(obj, data);

console.log(result);
// { greeting: "Hello Alice, welcome to {{place}}!" }
```

## Notes
- The function uses a regular expression to find placeholders of the form `{{placeholder}}` and replaces them with the corresponding values from the `data` object.
- If a placeholder is not found in `data`, the original placeholder (e.g., `{{name}}`) is kept in the result.

## Dependencies
- [`@utilify/types`](./types.md): Provides the `isPlainObject` function to check if a value is a plain object, which ensures that nested objects are handled recursively.

## Code Source
::: code-group

```typescript
import { isPlainObject } from '@utilify/types';

function interpolate<T extends Record<string, any>>(obj: T, data: Record<string, any>): T {
  const result: T = {} as T;

  for (const key in obj) {
    if (isPlainObject(obj[key])) {
      result[key] = interpolate(obj[key], data);
    } else if (typeof obj[key] === "string") {
      result[key] = obj[key].replace(/{{(\w+)}}/g, (_: string, match: string) => 
        match in data ? data[match] : `{{${match}}}`
      );
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}
```

```javascript
function interpolate(obj, data) {
  const result = {};

  for (const key in obj) {
    if (isPlainObject(obj[key])) {
      result[key] = interpolate(obj[key], data);
    } else if (typeof obj[key] === "string") {
      result[key] = obj[key].replace(/{{(\w+)}}/g, (_, match) => 
        match in data ? data[match] : `{{${match}}}`
      );
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}
```
:::

## References
- [`isPlainObject`](./types.md)