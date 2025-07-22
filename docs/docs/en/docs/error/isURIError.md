# isURIError

The `isURIError` function checks if a value is an instance of `URIError`.

## Syntax

```typescript
isURIError(value: any): value is URIError;
```

### Parameters

| Name      | Type      | Description         |
| --------- | --------- | ------------------ |
| `value`   | `any`     | The value to check |

### Returns

| Type       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `boolean`  | `true` if the value is an instance of `URIError`, `false` otherwise |

## Examples

```typescript
isURIError(new URIError("Invalid URI"));
// => true

isURIError(new Error());
// => false

isURIError({});
// => false
```

## Notes

* Useful for identifying errors related to URIs in JavaScript operations.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError
