# equalsEnv

The `equalsEnv` function checks if the value of an environment variable matches the expected value.

## Syntax

```typescript
equalsEnv(key: string, expected: string | string[]): boolean;
```

### Parameters

| Name        | Type                  | Description                                              |
| ----------- | --------------------- | -------------------------------------------------------- |
| `key`       | `string`              | The name of the environment variable to check            |
| `expected`  | `string` \| `string[]` | The expected value or list of values for comparison      |

### Returns

| Type       | Description                                                         |
| ---------- | ------------------------------------------------------------------- |
| `boolean`  | `true` if the environment variable matches the expected value, `false` otherwise |

## Examples

```typescript
equalsEnv("NODE_ENV", "production");
// => true or false

equalsEnv("NODE_ENV", ["development", "test"]);
// => true if NODE_ENV is "development" or "test"
```

## Notes

* Uses the `getEnv` function to retrieve the environment variable value.
* Allows comparison with multiple expected values using an array.

## References

* https://nodejs.org/api/process.html#processenv