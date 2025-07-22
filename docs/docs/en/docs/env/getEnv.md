# getEnv

The `getEnv` function returns the value of an environment variable, with support for a fallback if it does not exist.

## Syntax

```typescript
getEnv(key: string, fallback?: string): string | undefined;
```

### Parameters

| Name        | Type        | Description                                                        |
| ----------- | ----------- | ------------------------------------------------------------------ |
| `key`       | `string`    | The name of the environment variable to retrieve                   |
| `fallback`  | `string`    | Alternative value if the variable does not exist (optional)        |

### Returns

| Type                     | Description                                                        |
| ------------------------ | ------------------------------------------------------------------ |
| `string` \| `undefined`  | The value of the environment variable, or the fallback, or `undefined` if neither exists |

## Examples

```typescript
getEnv("NODE_ENV");
// => "production", "development", etc.

getEnv("NON_EXISTENT", "defaultValue");
// => "defaultValue"
```

## Notes

* Supports Node.js and Deno environments.
* Returns the fallback value if the variable does not exist.

## References

* https://nodejs.org/api/process.html#processenv