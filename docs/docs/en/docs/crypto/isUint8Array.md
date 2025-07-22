# isUint8Array

Checks if the provided value is a Uint8Array.

## Syntax
```typescript
isUint8Array(input: unknown): input is Uint8Array
```

## Parameters

| Name     | Type       | Description                |
| -------- | ---------- | -------------------------- |
| `input`  | `unknown`  | The value to be checked    |

## Returns

| Type       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `boolean`  | Returns `true` if the value is a Uint8Array, otherwise `false`     |

## Example
```typescript
isUint8Array(new Uint8Array([1,2,3])); // true
isUint8Array([]); // false
isUint8Array(null); // false
```

## Notes
- Uses object type checking and the internal signature `[object Uint8Array]`.

## References
- [MDN: Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
