# isTest

The `isTest` function checks if the runtime environment is in test mode.

## Syntax

```typescript
isTest(): boolean;
```

### Parameters

This function does not take any parameters.

### Returns

| Type       | Description                                         |
| ---------- | --------------------------------------------------- |
| `boolean`  | `true` if the environment is test, `false` otherwise |

## Examples

```typescript
isTest();
// => true (when NODE_ENV or DENO_ENV is 'test')
// => false (in other cases)
```

## Notes

* Checks the `NODE_ENV` and `DENO_ENV` environment variables.
* Useful for conditioning test-specific executions.

## References

* https://nodejs.org/api/process.html#processenv
* https://deno.com/manual@v1.42.1/runtime