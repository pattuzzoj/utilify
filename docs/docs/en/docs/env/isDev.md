# isDev

The `isDev` function checks if the runtime environment is in development mode.

## Syntax

```typescript
isDev(): boolean;
```

### Parameters

This function does not take any parameters.

### Returns

| Type       | Description                                               |
| ---------- | --------------------------------------------------------- |
| `boolean`  | `true` if the environment is development, `false` otherwise |

## Examples

```typescript
isDev();
// => true (when NODE_ENV or DENO_ENV is 'development')
// => false (in other cases)
```

## Notes

* Checks the `NODE_ENV` and `DENO_ENV` environment variables.
* Useful for conditioning development-specific executions.

## References

* https://nodejs.org/api/process.html#processenv
* https://deno.com/manual@v1.42.1/runtime