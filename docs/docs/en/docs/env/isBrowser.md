# isBrowser

The `isBrowser` function checks if the code is running in a browser environment.

## Syntax

```typescript
isBrowser(): boolean;
```

### Parameters

This function does not take any parameters.

### Returns

| Type       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `boolean`  | `true` if running in a browser environment, `false` otherwise      |

## Examples

```typescript
isBrowser();
// => true (in a browser)
// => false (in Node.js, Deno, etc.)
```

## Notes

* Checks for the existence of `window` and `document` objects.
* Useful for conditioning browser-specific executions.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Window
* https://developer.mozilla.org/en-US/docs/Web/API/Document