# getType

The `getType` function returns a string representing the type of the provided value, including special cases like "nan", "infinity", "null", and "array".

## Syntax
```typescript
getType(value: any): string;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be inspected |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `string`  | Value type (e.g., "string", "array", "nan") |

## Examples
```typescript
getType([]); // => "array"
getType(null); // => "null"
getType(NaN); // => "nan"
getType(Infinity); // => "infinity"
getType(123); // => "number"
```

## Notes
* Useful for identifying value types, including special cases.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#data_types