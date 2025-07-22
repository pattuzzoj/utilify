# getInstanceType

The `getInstanceType` function returns the constructor (class) name of an instance, or `null` if not applicable.

## Syntax

```typescript
getInstanceType(value: any): string | null;
```

## Parameters

| Parameter | Type   | Description         |
| :-------- | :----- | :------------------|
| `value`   | `any`  | Value to be inspected |

## Returns

| Type           | Description                                 |
| :------------- | :------------------------------------------ |
| `string \| null` | Constructor name or `null` if not applicable |

## Examples

```typescript
getInstanceType([]); // => "Array"
getInstanceType(new Map()); // => "Map"
getInstanceType(123); // => null
```

## Notes

* Useful for identifying object instance types.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf