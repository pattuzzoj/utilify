# isProd

The `isProd` function checks if the runtime environment is in production mode.

## Syntax

```typescript
isProd(): boolean;
```

### Parameters

This function does not take any parameters.

### Returns

| Type       | Description                                         |
| ---------- | --------------------------------------------------- |
| `boolean`  | `true` if the environment is production, `false` otherwise |

## Examples

```typescript
isProd();
// => true (when NODE_ENV or DENO_ENV is 'production')
// => false (in other cases)
```

## Notes

* Checks the `NODE_ENV` and `DENO_ENV` environment variables.
* Useful for conditioning production-specific executions.

## References

* https://nodejs.org/api/process.html#processenv
* https://deno.com/manual@v1.42.1/runtime