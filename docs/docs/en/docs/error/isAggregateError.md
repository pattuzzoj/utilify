# isAggregateError

The `isAggregateError` function checks if a value is an instance of `AggregateError`.

## Syntax

```typescript
isAggregateError(value: any): value is AggregateError;
```

### Parameters

| Name      | Type      | Description             |
| --------- | --------- | ---------------------- |
| `value`   | `any`     | The value to check     |

### Returns

| Type       | Description                                                                 |
| ---------- | --------------------------------------------------------------------------- |
| `boolean`  | `true` if the value is an instance of `AggregateError`, `false` otherwise   |

## Examples

```typescript
isAggregateError(new AggregateError([]));
// => true

isAggregateError(new Error());
// => false

isAggregateError({});
// => false
```

## Notes

* The check only returns `true` if `AggregateError` is available in the environment and the value is an instance of this class.
* Useful for identifying aggregate errors in compatible environments.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError