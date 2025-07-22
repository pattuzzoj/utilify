# hasEnv

The `hasEnv` function checks if an environment variable exists in the runtime environment.

## Syntax

```typescript
hasEnv(key: string): boolean;
```

### Parameters

| Name     | Type      | Description                                   |
| -------- | --------- | --------------------------------------------- |
| `key`    | `string`  | The name of the environment variable to check |

### Returns

| Type       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `boolean`  | `true` if the environment variable exists, `false` otherwise       |

## Examples

```typescript
hasEnv("NODE_ENV");
// => true or false

hasEnv("INEXISTENTE");
// => false
```

## Notes

* Supports Node.js and Deno environments.
* Useful for checking the existence of environment variables before accessing them.

## References

* https://nodejs.org/api/process.html#processenv