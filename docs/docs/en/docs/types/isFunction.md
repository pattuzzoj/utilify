# isFunction

The `isFunction` function checks if the provided value is a function.

## Syntax
```typescript
isFunction(value: any): value is Function;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is a function                    |

## Examples
```typescript
isFunction(function() {}); // => true
isFunction(() => {}); // => true
isFunction(123); // => false
```

## Notes
* Useful for validation before executing or applying functions.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function