# base64Encode

Encodes an ArrayBuffer or Uint8Array into a Base64 or Base64URL string.

## Syntax

```typescript
base64Encode(input: Uint8Array | ArrayBuffer, urlSafe?: boolean): string
```

## Parameters

| Name        | Type                        | Description                                             |
| ----------- | --------------------------- | ------------------------------------------------------- |
| `input`     | `Uint8Array` \| `ArrayBuffer`  | The data to encode                                      |
| `urlSafe`   | `boolean`                   | (Optional) If true, outputs Base64URL. Default is false |

## Returns

| Type       | Description                          |
| ---------- | ------------------------------------ |
| `string`   | The Base64 or Base64URL encoded string |

## Example
```typescript
base64Encode(new Uint8Array([72, 101, 108, 108, 111])); // "SGVsbG8="
base64Encode(new Uint8Array([72, 101, 108, 108, 111]), true); // "SGVsbG8"
```

## Notes
- Supports environments with `Buffer` (Node.js) and `btoa` (browsers).
- Throws an error if no Base64 encoder is available.

## References
- [MDN: btoa](https://developer.mozilla.org/en-US/docs/Web/API/btoa)
- [Node.js: Buffer](https://nodejs.org/api/buffer.html)