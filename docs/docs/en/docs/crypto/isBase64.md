# isBase64

Checks if a string is Base64 encoded.

## Syntax
```typescript
isBase64(value: string): boolean
```

## Parameters

| Name     | Type      | Description                |
| -------- | --------- | -------------------------- |
| `value`  | `string`  | The string to be checked   |

## Returns

| Type       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `boolean`  | Returns `true` if the string is in Base64 format, otherwise `false` |

## Example
```typescript
isBase64("U29tZSBkYWRv"); // true
isBase64("12345"); // false
isBase64(12345); // throws TypeError
```

## Notes
- Throws a `TypeError` if the value is not a string.
- Accepts valid Base64 strings, including padding with `=`.

## References
- [MDN: Base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64)