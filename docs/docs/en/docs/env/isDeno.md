# isDeno

The `isDeno` function checks if the code is running in the Deno environment.

## Syntax

```typescript
isDeno(): boolean;
```

### Parameters

This function does not take any parameters.

### Returns

| Type       | Description                                 |
| ---------- | ------------------------------------------- |
| `boolean`  | `true` if running in Deno, `false` otherwise |

## Examples

```typescript
isDeno();
// => true (in Deno)
// => false (in other environments)
```

## Notes

* Checks for the existence of the global `Deno` object and its `version` property.
* Useful for conditional execution specific to Deno.

## References

* https://deno.com/manual@v1.42.1/runtime
