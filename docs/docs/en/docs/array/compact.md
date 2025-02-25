# compact

The `compact` function removes all falsy values from an array. Falsy values include `false`, `0`, `""`, `null`, `undefined`, and `NaN`. This is useful when you need to clean up an array by removing unwanted or empty values.

## Syntax

```typescript
function compact<T>(arr: T[]): T[];
```

### Parameters

| Name   | Type         | Description                                                        |
|--------|--------------|--------------------------------------------------------------------|
| `arr`  | `T[]`        | The original array from which falsy values will be removed.        |

### Return

| Type    | Description                                                                   |
|---------|-------------------------------------------------------------------------------|
| `T[]`   | A new array with all falsy values removed.                                    |

## Examples

```typescript
import compact from './compact';

const data = [0, 1, false, 2, "", 3, null, undefined, NaN, 4];

// Removing falsy values
console.log(compact(data)); // [1, 2, 3, 4]
```

## Notes

- Falsy values in JavaScript include: `false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN`.
- The function uses the `isFalsy` utility from the `@utilify/types` library to determine if a value is falsy.
- The original array is not modified; a new array is returned.

## Source Code

::: code-group
```typescript
import { isFalsy } from "@utilify/types";

function compact<T>(arr: T[]): T[] {
  return arr.filter((value: T) => !isFalsy(value));
}
```

```javascript
import { isFalsy } from "@utilify/types";

function compact(arr) {
  return arr.filter((value) => !isFalsy(value));
}
```
:::

## References

- [Falsy Values in JavaScript - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- [Array.prototype.filter() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)