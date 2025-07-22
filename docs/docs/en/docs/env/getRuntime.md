# getRuntime

The `getRuntime` function returns the detected runtime environment: Browser, Node, Deno, Bun, or Unknown.

## Syntax

```typescript
getRuntime(): 'Browser' | 'Node' | 'Deno' | 'Bun' | 'Unknown';
```

### Parameters

This function does not take any parameters.

### Returns

| Type                                              | Description                        |
| ------------------------------------------------- | ---------------------------------- |
| `'Browser'` \| `'Node'` \| `'Deno'` \| `'Bun'` \| `'Unknown'` | The detected runtime environment |

## Examples

```typescript
getRuntime();
// => "Browser", "Node", "Deno", "Bun" or "Unknown"
```

## Notes

* Uses helper functions to detect the environment.
* Useful for adapting behavior according to the runtime.

## References

* https://nodejs.org/
* https://deno.com/
* https://bun.sh/