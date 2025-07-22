# isBun

The `isBun` function checks if the code is running in the Bun environment.

## Syntax

```typescript
isBun(): boolean;
```

### Parameters

This function does not take any parameters.

### Returns

| Type       | Description                                 |
| ---------- | ------------------------------------------- |
| `boolean`  | `true` if running in Bun, `false` otherwise |

## Examples

```typescript
isBun();
// => true (on Bun)
// => false (on other environments)
```

## Notes

* Checks for the existence of the global `Bun` object and its `version` property.
* Useful for conditional execution specific to Bun.

## References

* https://bun.sh/docs/api/globals
