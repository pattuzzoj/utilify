# isAsyncFunction

The `isAsyncFunction` function checks if the provided value is an async function.

## Syntax
```typescript
isAsyncFunction(value: any): value is (...args: any[]) => Promise<any>;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is an async function             |

## Examples
```typescript
isAsyncFunction(async function() {}); // => true
isAsyncFunction(function() {}); // => false
```

## Notes
* Useful for validating functions before using await.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function