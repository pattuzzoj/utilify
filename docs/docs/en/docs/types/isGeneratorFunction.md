# isGeneratorFunction

The `isGeneratorFunction` function checks if the provided value is a generator function.

## Syntax
```typescript
isGeneratorFunction(value: any): value is GeneratorFunction;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is a generator function          |

## Examples
```typescript
isGeneratorFunction(function* () {}); // => true
isGeneratorFunction(() => {}); // => false
```

## Notes
* Useful for validating functions before using for-of or yield.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*