# convertDateTo

The `convertDateTo` function converts a date to a specific output type: string, number, or Date object.

## Syntax

```typescript
convertDateTo<T extends 'string' | 'number' | 'date'>(date: Date, type: T): string | number | Date;
```

### Parameters

| Name    | Type      | Description                                              |
| ------- | --------- | ------------------------------------------------------ |
| `date`  | `Date`    | The date to be converted                               |
| `type`  | `string`  | The desired output type: 'string', 'number', or 'date' |

### Returns

| Type                        | Description                                 |
| --------------------------- | ------------------------------------------- |
| `string` \| `number` \| `Date` | Value converted according to the requested type |

## Examples

```typescript
convertDateTo(new Date("2024-06-10T12:00:00Z"), 'string');
// => "2024-06-10T12:00:00.000Z"

convertDateTo(new Date("2024-06-10T12:00:00Z"), 'number');
// => 1718020800000

convertDateTo(new Date("2024-06-10T12:00:00Z"), 'date');
// => Date Mon Jun 10 2024 12:00:00 GMT+0000
```

## Notes

* Throws an error if the date is not valid or if the type is invalid.
* Useful for standardizing date output in different contexts.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date