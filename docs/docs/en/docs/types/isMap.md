# isMap

The `isMap` function checks if the provided value is an instance of Map.

## Syntax
```typescript
isMap(value: any): value is Map<any, any>;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is an instance of Map            |

## Examples
```typescript
isMap(new Map()); // => true
isMap({}); // => false
```

## Notes
* Useful for validating collections before performing Map-specific operations.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map