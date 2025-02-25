# hash

The `hash` function generates a cryptographic hash for the provided input using the Web Crypto API.

## Signature

```typescript
async function hash(
  data: string | ArrayBuffer | DataView,
  algorithm: 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512',
  output: 'hex' | 'base64' | 'buffer' = 'buffer'
): Promise<string | ArrayBuffer | undefined>;
```

### Parameters

| Name       | Type                              | Description                                                       |
|------------|-----------------------------------|-------------------------------------------------------------------|
| `data`     | `string | ArrayBuffer | DataView` | The input data to hash.                                           |
| `algorithm`| `'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512'` | The hashing algorithm to use.                                    |
| `output`   | `'hex' | 'base64' | 'buffer'`   | The format of the hash output (`buffer` is the default).          |

### Return

| Type                    | Description                                                    |
|-------------------------|----------------------------------------------------------------|
| `string`               | The hash formatted as a string in `hex` or `base64` format.    |
| `ArrayBuffer`           | The hash as an `ArrayBuffer` if the format is `buffer`.        |
| `undefined`            | If the function is executed on the server.                    |

## Examples

```typescript
(async () => {
  const data = 'Hello, World!';
  console.log(await hash(data, 'SHA-256', 'hex'));    // Returns the hash in hexadecimal format
  console.log(await hash(data, 'SHA-512', 'base64')); // Returns the hash in base64 format
  console.log(await hash(data, 'SHA-1'));             // Returns the hash as an ArrayBuffer
})();
```

## Notes

- If executed on the server, the function will return `undefined`.
- The specified algorithm must be supported by the Web Crypto API.

## Dependencies

- [`isServer`](../environment/isServer.md): Checks whether the code is running on the server.

## Source Code

::: code-group
```typescript
import { isServer } from '@utilify/environment';

type Algorithm = 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512';
type HashOutput = 'hex' | 'base64' | 'buffer';

async function hash(
  data: string | ArrayBuffer | DataView,
  algorithm: Algorithm,
  output: HashOutput = 'buffer'
): Promise<string | ArrayBuffer | undefined> {
  if (isServer()) return;

  const buffer: Uint8Array | ArrayBuffer | DataView = typeof data === 'string' ? new TextEncoder().encode(data) : data;
  const hashBuffer = await crypto.subtle.digest(algorithm, buffer);

  if (output === 'base64') {
    return btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));
  } else if (output === 'hex') {
    return Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
  }

  return hashBuffer;
}
```

```javascript
import { isServer } from '@utilify/environment';

async function hash(data, algorithm, output = 'buffer') {
  if (isServer()) return;

  const buffer = typeof data === 'string' ? new TextEncoder().encode(data) : data;
  const hashBuffer = await crypto.subtle.digest(algorithm, buffer);

  if (output === 'base64') {
    return btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));
  } else if (output === 'hex') {
    return Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
  }

  return hashBuffer;
}
```
:::

## References

- [Web Crypto API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
- [TextEncoder - MDN](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder)
- [ArrayBuffer - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)