# isServer

The `isServer` function checks if the code is running in a server environment (not a browser).

## Syntax

```typescript
isServer(): boolean;
```

### Parameters

This function does not take any parameters.

### Returns

| Type       | Description                                               |
| ---------- | --------------------------------------------------------- |
| `boolean`  | `true` if running in a server environment, `false` otherwise |

## Examples

```typescript
isServer();
// => true (in Node.js, Deno, etc.)
// => false (in a browser)
```

## Notes

* Checks for the absence of `window` or `document` objects.
* Useful for conditioning server-specific executions.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Window
* https://developer.mozilla.org/en-US/docs/Web/API/Document