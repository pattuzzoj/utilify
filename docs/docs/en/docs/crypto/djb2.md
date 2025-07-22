# djb2

Calculates the hash of a string using the djb2 algorithm.

## Syntax
```typescript
djb2(str: string): number
```

## Parameters

| Name    | Type      | Description                  |
| ------- | --------- | ---------------------------- |
| `str`   | `string`  | The string to be processed   |

## Returns

| Type      | Description                                 |
| --------- | ------------------------------------------- |
| `number`  | The calculated hash value (unsigned 32 bits) |

## Example
```typescript
djb2("hello"); // 210714636441
```

## Notes
- Throws a `TypeError` if the value is not a string.
- The djb2 algorithm is simple and fast, but not secure for cryptographic use.

## References
- [djb2 hash function](http://www.cse.yorku.ca/~oz/hash.html)