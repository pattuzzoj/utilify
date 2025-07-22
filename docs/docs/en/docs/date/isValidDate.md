# isValidDate

The `isValidDate` function checks if a value is a valid JavaScript date.

## Syntax

```typescript
isValidDate(value: any): boolean;
```

### Parameters

| Name     | Type      | Description         |
| -------- | --------- | ------------------ |
| `value`  | `any`     | Value to be checked |

### Returns

| Type       | Description                              |
| ---------- | ---------------------------------------- |
| `boolean`  | True if the value is a valid date        |

## Examples

```typescript
isValidDate(new Date());
// => true

isValidDate("2024-06-10");
// => true

isValidDate("invalid date");
// => false
```

## Notes

* Useful for input validation before performing date operations.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date