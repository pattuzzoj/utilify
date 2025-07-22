# isUUID

Checks if a string is in UUID (Universally Unique Identifier) format.

## Syntax
```typescript
isUUID(value: string): boolean
```

## Parameters

| Name     | Type      | Description                |
| -------- | --------- | -------------------------- |
| `value`  | `string`  | The string to be checked   |

## Returns

| Type       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `boolean`  | Returns `true` if the string is a valid UUID, otherwise `false`    |

## Example
```typescript
isUUID("123e4567-e89b-12d3-a456-426614174000"); // true
isUUID("not-a-uuid"); // false
isUUID(12345 as any); // throws TypeError
```

## Notes
- Throws a `TypeError` if the value is not a string.
- The pattern accepts UUIDs version 1 to 5.

## References
- [RFC 4122 - UUID](https://datatracker.ietf.org/doc/html/rfc4122)