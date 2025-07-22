# isObject

The `isObject` function checks if the provided value is an object (excluding null).

## Syntax
```typescript
isObject(value: any): value is object;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is an object (not null)          |

## Examples
```typescript
isObject({}); // => true
isObject([]); // => true
isObject(null); // => false
```

## Notes
* Arrays and functions are also considered objects in JavaScript.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object