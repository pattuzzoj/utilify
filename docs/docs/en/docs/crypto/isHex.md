# isHex

Checks if a string contains only hexadecimal characters.

## Syntax
```typescript
isHex(value: string): boolean
```

## Parameters

| Name     | Type      | Description                |
| -------- | --------- | -------------------------- |
| `value`  | `string`  | The string to be checked   |

## Returns

| Type       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `boolean`  | Returns `true` if the string is in hexadecimal format, otherwise `false` |

## Example
```typescript
isHex("1a2b3c"); // true
isHex("xyz"); // false
isHex(12345 as any); // throws TypeError
```

## Notes
- Throws a `TypeError` if the value is not a string.
- Accepts both uppercase and lowercase letters.

## References
- [MDN: Hexadecimal](https://developer.mozilla.org/en-US/docs/Glossary/Hexadecimal)