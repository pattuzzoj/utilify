# hexDecode

Decodes a hexadecimal string to a Uint8Array.

## Syntax
```typescript
hexDecode(hex: string): Uint8Array
```

## Parameters

| Name    | Type      | Description                        |
| ------- | --------- | ---------------------------------- |
| `hex`   | `string`  | The hexadecimal string to be decoded |

## Returns

| Type         | Description                              |
| ------------ | ---------------------------------------- |
| `Uint8Array` | The decoded bytes from the hexadecimal string |

## Example
```typescript
hexDecode("48656c6c6f"); // Uint8Array([72, 101, 108, 108, 111])
```

## Notes
- Throws an error if the string is not valid hexadecimal or if the length is not even.

## References
- [MDN: Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
