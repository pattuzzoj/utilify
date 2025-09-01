# isArrayBuffer

Checks if the provided value is an ArrayBuffer.

## Syntax
```typescript
isArrayBuffer(input: unknown): input is ArrayBuffer
```

## Parameters

| Name     | Type       | Description                |
| -------- | ---------- | -------------------------- |
| `input`  | `unknown`  | The value to be checked    |

## Returns

| Type       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `boolean`  | Returns `true` if the value is an ArrayBuffer, otherwise `false`   |

## Example
```typescript
isArrayBuffer(new ArrayBuffer(8)); // true
isArrayBuffer([]); // false
isArrayBuffer(null); // false
```

## Notes
- Uses object type checking and the internal signature `[object ArrayBuffer]`.

## References
- [MDN: ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
