# base64Decode

Decodes a Base64 or Base64URL string to a Uint8Array.

## Syntax

```typescript
base64Decode(input: string, urlSafe?: boolean): Uint8Array
```

## Parameters

| Name        | Type       | Description                                             |
| ----------- | ---------- | ------------------------------------------------------- |
| `input`     | `string`   | The Base64 or Base64URL encoded string to decode        |
| `urlSafe`   | `boolean`  | (Optional) If true, treats the input as Base64URL. Default is false |

## Returns

| Type           | Description                |
| -------------- | -------------------------- |
| `Uint8Array`   | The decoded byte array     |

## Example

```typescript
const data = base64Decode("SGVsbG8gV29ybGQh");
console.log(new TextDecoder().decode(data)); // "Hello World!"
```

## Notes

- Throws an error if the input is not a valid Base64/Base64URL string.

## References

- [Base64 (Wikipedia)](https://en.wikipedia.org/wiki/Base64)
