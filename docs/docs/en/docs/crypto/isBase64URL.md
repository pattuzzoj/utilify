# isBase64URL

Checks if a string is Base64URL encoded.

## Syntax
```typescript
isBase64URL(value: string): boolean
```

## Parameters

| Name     | Type      | Description                |
| -------- | --------- | -------------------------- |
| `value`  | `string`  | The string to be checked   |

## Returns

| Type       | Description                                                              |
| ---------- | ------------------------------------------------------------------------ |
| `boolean`  | Returns `true` if the string is in Base64URL format, otherwise `false`   |

## Example
```typescript
isBase64URL("U29tZV9kYWRvLQ"); // true
isBase64URL("U29tZSBkYWRv"); // false
isBase64URL(12345); // throws TypeError
```

## Notes
- Throws a `TypeError` if the value is not a string.
- Base64URL uses the characters `A-Z`, `a-z`, `0-9`, `_`, and `-`.

## References
- [RFC 4648 - Base64URL](https://datatracker.ietf.org/doc/html/rfc4648#section-5)