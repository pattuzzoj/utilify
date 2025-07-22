# isHash

Checks if a string is a valid hash for the specified algorithm.

## Syntax
```typescript
isHash(hash: string, algorithm: HashAlgorithm = 'SHA-256'): boolean
```

## Parameters

| Name         | Type             | Description                                                                 |
| ------------ | ---------------- | --------------------------------------------------------------------------- |
| `hash`       | `string`         | The string to be checked                                                    |
| `algorithm`  | `HashAlgorithm`  | (Optional) Expected hash algorithm. Can be 'SHA-1', 'SHA-256', 'SHA-384', or 'SHA-512'. Default: 'SHA-256' |

## Returns

| Type       | Description                                                                 |
| ---------- | --------------------------------------------------------------------------- |
| `boolean`  | Returns `true` if the string matches the format and length for the specified algorithm, otherwise `false` |

## Example
```typescript
isHash("a3f5...", "SHA-256"); // true or false, depending on length
isHash("da39a3ee5e6b4b0d3255bfef95601890afd80709", "SHA-1"); // true
isHash("notahash", "SHA-256"); // false
isHash(12345 as any); // throws TypeError
```

## Notes
- Throws a `TypeError` if the value is not a string.
- Throws an error if the algorithm is not supported.
- The hash must contain only hexadecimal characters.

## References
- [MDN: Hash](https://developer.mozilla.org/en-US/docs/Web/Security/Information_security_basics/Cryptographic_hash_functions)