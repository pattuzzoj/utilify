# isBrowser

The `isBrowser` function checks whether the code is running in a browser environment by verifying the existence of the `window` and `document` objects.

## Syntax

```typescript
function isBrowser(): boolean;
```

### Return

| Type      | Description                                              |
|-----------|----------------------------------------------------------|
| `boolean` | Returns `true` if the code is running in a browser environment, otherwise returns `false`. |

## Examples

```typescript
console.log(isBrowser()); // true if running in a browser, false if running in a server or other environment
```

## Notes

- The function checks for the presence of the `window` and `document` objects, which are typically available in a browser environment.
- It returns `false` if the code is running in a non-browser environment such as a server.

## Code Source

::: code-group
```typescript
function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
```

```javascript
function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
```
:::

## References

- [Window - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window)
- [Document - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document)