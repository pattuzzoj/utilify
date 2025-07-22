# isDOMException

The `isDOMException` function checks if a value is an instance of `DOMException`.

## Syntax

```typescript
isDOMException(value: any): value is DOMException;
```

### Parameters

| Name      | Type      | Description         |
| --------- | --------- | ------------------ |
| `value`   | `any`     | The value to check |

### Returns

| Type       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `boolean`  | `true` if the value is an instance of `DOMException`, `false` otherwise |

## Examples

```typescript
isDOMException(new DOMException("DOM error"));
// => true

isDOMException(new Error());
// => false

isDOMException({});
// => false
```

## Notes

* Useful for identifying exceptions related to the DOM API in compatible environments.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/DOMException