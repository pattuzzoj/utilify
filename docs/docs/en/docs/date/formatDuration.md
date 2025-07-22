# formatDuration

The `formatDuration` function converts a duration in milliseconds to a human-readable string, such as "2h 30m" or "1d 4h".

## Syntax

```typescript
formatDuration(ms: number, options?: { compact?: boolean }): string;
```

### Parameters

| Name      | Type                         | Description                                         |
| --------- | ---------------------------- | -------------------------------------------------- |
| `ms`      | `number`                     | Duration in milliseconds                            |
| `options` | `{ compact?: boolean }`       | (Optional) Formatting options (e.g., compact)       |

### Returns

| Type      | Description                                 |
| --------- | ------------------------------------------- |
| `string`  | Duration formatted in a readable format      |

## Examples

```typescript
formatDuration(90061000);
// => "1d 1h 1m 1s"

formatDuration(5400000, { compact: true });
// => "1h 30m"
```

## Notes

* Throws an error if the value is not a valid number.
* Useful for displaying time intervals in a user-friendly way.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date