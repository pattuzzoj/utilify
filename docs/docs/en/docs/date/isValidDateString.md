# isValidDateString

The `isValidDateString` function checks if a string represents a valid date in a format accepted by JavaScript.

## Syntax

```typescript
isValidDateString(value: string): boolean;
```

### Parameters

| Name     | Type      | Description         |
| -------- | --------- | ------------------ |
| `str`    | `string`  | String to check    |

### Returns

| Type       | Description                              |
| ---------- | ---------------------------------------- |
| `boolean`  | True if the string is a valid date string |

## Examples

```typescript
isValidDateString("2024-06-10");
// => true

isValidDateString("10/06/2024");
// => true

isValidDateString("invalid date");
// => false
```

## Notes

* Useful for validating strings before converting them to dates.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date