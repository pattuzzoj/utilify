# convertTimeUnit

The `convertTimeUnit` function converts values between different time units, such as milliseconds, seconds, minutes, hours, and days.

## Syntax

```typescript
convertTimeUnit(value: number, from: string, to: string): number;
```

### Parameters

| Name     | Type      | Description                                 |
| -------- | --------- | ------------------------------------------- |
| `value`  | `number`  | Value to be converted                      |
| `from`   | `string`  | Source unit (`ms`, `s`, `min`, `h`, `d`)   |
| `to`     | `string`  | Target unit (`ms`, `s`, `min`, `h`, `d`)   |

### Returns

| Type      | Description                        |
| --------- | ---------------------------------- |
| `number`  | Value converted to the target unit |

## Examples

```typescript
convertTimeUnit(2, 'h', 'min');
// => 120

convertTimeUnit(3600, 's', 'h');
// => 1
```

## Notes

* Throws an error if the units are invalid.
* Useful for calculations involving different time scales.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date