# isAsyncGeneratorFunction

The `isAsyncGeneratorFunction` function checks if the provided value is an async generator function.

## Syntax

```typescript
isAsyncGeneratorFunction(value: any): value is AsyncGeneratorFunction;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                       |
| :-------- | :------------------------------------------------ |
| `boolean` | True if it is an async generator function         |

## Examples
```typescript
isAsyncGeneratorFunction(async function* () {}); // => true
isAsyncGeneratorFunction(function* () {}); // => false
```

## Notes
* Useful for validating functions before using for-await-of.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function*