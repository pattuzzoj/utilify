# isWeakMap

The `isWeakMap` function checks if the provided value is an instance of WeakMap.

## Syntax
```typescript
isWeakMap(value: any): value is WeakMap<any, any>;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is an instance of WeakMap        |

## Examples
```typescript
isWeakMap(new WeakMap()); // => true
isWeakMap({}); // => false
```

## Notes
* Useful for validating collections before performing WeakMap-specific operations.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap