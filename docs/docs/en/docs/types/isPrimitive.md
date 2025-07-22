# isPrimitive

The `isPrimitive` function checks if the provided value is a primitive type in JavaScript.

## Syntax
```typescript
isPrimitive(value: any): value is (string | number | boolean | symbol | bigint | null | undefined);
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is a primitive type              |

## Examples
```typescript
isPrimitive(123); // => true
isPrimitive("abc"); // => true
isPrimitive({}); // => false
```

## Notes
* Primitive types: string, number, boolean, symbol, bigint, null, undefined.

## References
* https://developer.mozilla.org/en-US/docs/Glossary/Primitive