# isWeakSet

The `isWeakSet` function checks if the provided value is an instance of WeakSet.

## Syntax
```typescript
isWeakSet(value: any): value is WeakSet<any>;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is an instance of WeakSet        |

## Examples
```typescript
isWeakSet(new WeakSet()); // => true
isWeakSet([]); // => false
```

## Notes
* Useful for validating collections before performing WeakSet-specific operations.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet