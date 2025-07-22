# generateUUID

Generates a version 4 UUID (Universally Unique Identifier).

## Syntax
```typescript
generateUUID(): string
```

## Parameters

_None_

## Returns

| Type      | Description                  |
| --------- | ---------------------------- |
| `string`  | A v4 UUID in standard format |

## Example
```typescript
generateUUID(); // "e.g. 123e4567-e89b-12d3-a456-426614174000"
```

## Notes
- Uses the `crypto.randomUUID` API available in modern environments.

## References
- [MDN: crypto.randomUUID](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)
- [RFC 4122 - UUID](https://datatracker.ietf.org/doc/html/rfc4122)