# hexEncode

Encodes an ArrayBuffer or Uint8Array into a hexadecimal string.

## Syntax
```typescript
hexEncode(data: ArrayBuffer | Uint8Array): string
```

## Parameters

| Name    | Type                        | Description                |
| ------- | --------------------------- | -------------------------- |
| `data`  | `ArrayBuffer` \| `Uint8Array`  | The data to be encoded     |

## Returns

| Type      | Description                        |
| --------- | ---------------------------------- |
| `string`  | The resulting hexadecimal string   |

## Example
```typescript
hexEncode(new Uint8Array([72, 101, 108, 108, 111])); // "48656c6c6f"
```

## Notes
- Converts each byte to its hexadecimal representation.

## References
- [MDN: Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
