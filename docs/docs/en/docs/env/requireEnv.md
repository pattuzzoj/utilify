# requireEnv

The `requireEnv` function returns the value of a required environment variable, throwing an error if it is not defined.

## Syntax

```typescript
requireEnv(key: string): string;
```

### Parameters

| Name   | Type     | Description                                    |
| ------ | -------- | ---------------------------------------------- |
| `key`  | `string` | The name of the required environment variable  |

### Returns

| Type      | Description                                         |
| --------- | --------------------------------------------------- |
| `string`  | The value of the environment variable, if defined    |

## Examples

```typescript
requireEnv("NODE_ENV");
// => "development" (or another defined value)

requireEnv("NON_EXISTENT_VAR");
// => throws Error: Expected a valid value for 'key'
```

## Notes

* Compatible with Node.js and Deno environments.
* Throws an error if the variable is not defined.

## References

* https://nodejs.org/api/process.html#processenv
* https://deno.com/manual@v1.42.1/runtime