# isSet

The `isSet` function checks if the provided value is an instance of Set.

## Syntax
```typescript
isSet(value: any): value is Set<any>;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is an instance of Set            |

## Examples
```typescript
isSet(new Set()); // => true
isSet([]); // => false
```

## Notes
* Useful for validating collections before performing Set-specific operations.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set