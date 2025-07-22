# identity

Returns the received value without modifications.

## Syntax
```typescript
identity<T>(value: T): T
```

## Parameters
| Name      | Type   | Description           |
| --------- | ------ | ---------------------|
| `value`   | `T`    | The value to be returned. |

## Returns
| Type   | Description                      |
| ------ | ---------------------------------|
| `T`    | The same value received as an argument. |

## Example
```typescript
identity(42); // 42
identity("abc"); // "abc"
```

## Notes
- Useful as a default function or in functional pipelines.

## References
- [MDN: Identity function](https://developer.mozilla.org/en-US/docs/Glossary/Identity_function)