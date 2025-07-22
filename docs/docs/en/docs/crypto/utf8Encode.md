# utf8Encode

Encodes a string into UTF-8, returning a Uint8Array.

## Syntax
```typescript
utf8Encode(input: string): Uint8Array
```

## Parameters

| Name    | Type      | Description                      |
| ------- | --------- | -------------------------------- |
| `input` | `string`  | The string to be encoded into UTF-8 |

## Returns

| Type         | Description                      |
| ------------ | -------------------------------- |
| `Uint8Array` | The bytes of the UTF-8 encoded string |

## Example
```typescript
utf8Encode("Olá"); // Uint8Array([...])
utf8Encode(123 as any); // throws TypeError
```

## Notes
- Supports environments with `TextEncoder` (modern browsers) and `Buffer` (Node.js).
- Throws an error if no UTF-8 encoder is available.

## References
- [MDN: TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder)
- [Node.js: Buffer](https://nodejs.org/api/buffer.html)
