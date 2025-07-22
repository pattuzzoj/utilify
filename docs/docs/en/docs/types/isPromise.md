# isPromise

The `isPromise` function checks if the provided value is a Promise.

## Syntax
```typescript
isPromise<T = any>(value: any): value is Promise<T>;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is a Promise                     |

## Examples
```typescript
isPromise(Promise.resolve(123)); // => true
isPromise(123); // => false
```

## Notes
* Useful for validation before using then/catch/finally.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise