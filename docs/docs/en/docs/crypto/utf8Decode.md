# utf8Decode

Decodes an ArrayBuffer or Uint8Array to a UTF-8 string.

## Syntax
```typescript
utf8Decode(data: ArrayBuffer | Uint8Array): string
```

## ## Parameters

| Name    | Type                        | Description                |
| ------- | --------------------------- | -------------------------- |
| `data`  | `ArrayBuffer` \| `Uint8Array`  | The data to be decoded     |

## Returns

| Type      | Description                        |
| --------- | ---------------------------------- |
| `string`  | The decoded UTF-8 string           | string.

## Example
```typescript
utf8Decode(new Uint8Array([72, 101, 108, 108, 111])); // "Hello"
```

## Notes
- Supports environments with `TextDecoder` (modern browsers) and `Buffer` (Node.js).
- Throws an error if no UTF-8 decoder is available.

## References
- [MDN: TextDecoder](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder)
- [Node.js: Buffer](https://nodejs.org/api/buffer.html)
