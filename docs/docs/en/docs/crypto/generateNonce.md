# generateNonce

Generates a random byte vector (nonce) of the specified length.

## Syntax
```typescript
generateNonce(length?: number): Uint8Array
```

## Parameters

| Name      | Type       | Description                                 |
| --------- | ---------- | ------------------------------------------- |
| `length`  | `number`   | (Optional) The length of the nonce in bytes. Default is 16 |

## Returns

| Type         | Description                    |
| ------------ | ----------------------------- |
| `Uint8Array` | A vector of random bytes       |

## Example
```typescript
generateNonce(); // Uint8Array(16) [...]
generateNonce(32); // Uint8Array(32) [...]
```

## Notes
- Throws an error if the length is not positive or not a multiple of 8.
- Uses `crypto.getRandomValues` for secure random number generation.

## References
- [MDN: crypto.getRandomValues](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues)