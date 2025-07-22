# isWeakRef

The `isWeakRef` function checks if the provided value is an instance of WeakRef.

## Syntax
```typescript
isWeakRef(value: any): value is WeakRef<any>;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is an instance of WeakRef        |

## Examples
```typescript
isWeakRef(new WeakRef({})); // => true
isWeakRef({}); // => false
```

## Notes
* Useful for validating objects before performing WeakRef-specific operations.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef