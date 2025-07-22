# isArray

The `isArray` function checks if the provided value is an array.

## Syntax
```typescript
isArray(value: any): value is any[];
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is an array                      |

## Examples
```typescript
isArray([]); // => true
isArray({}); // => false
```

## Notes
* Useful for type validation before performing array operations.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray