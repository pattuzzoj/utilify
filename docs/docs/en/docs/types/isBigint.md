# isBigint

The `isBigint` function checks if the provided value is of type bigint.

## Syntax
```typescript
isBigint(value: any): value is bigint;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is a bigint                      |

## Examples
```typescript
isBigint(10n); // => true
isBigint(10); // => false
```

## Notes
* Useful for validating large numeric values.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt