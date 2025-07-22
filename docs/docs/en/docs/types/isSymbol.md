# isSymbol

The `isSymbol` function checks if the provided value is of type symbol.

## Syntax
```typescript
isSymbol(value: any): value is symbol;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is a symbol                      |

## Examples
```typescript
isSymbol(Symbol("id")); // => true
isSymbol("id"); // => false
```

## Notes
* Useful for validating unique identifiers.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol