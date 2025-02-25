# isServer

The `isServer` function checks if the code is being executed in a server environment, such as Node.js, Deno, Bun, or any other environment where the `window` object is not present (like servers).

## Syntax

```typescript
function isServer(): boolean;
```

### Return

| Type      | Description                                              |
|-----------|----------------------------------------------------------|
| `boolean` | Returns `true` if the code is running on the server, otherwise `false`. |

## Examples

```typescript
console.log(isServer()); // true if running on the server, false otherwise
```

## Notes

- The function uses `isNode`, `isDeno`, and `isBun` to check for Node.js, Deno, and Bun environments respectively.
- It also checks if the `window` object is undefined, which indicates that the code is not running in a browser.

## Source Code

::: code-group
```typescript
import isBun from "./isBun";
import isDeno from "./isDeno";
import isNode from "./isNode";

function isServer(): boolean {
  return isNode() || isDeno() || isBun() || typeof window === "undefined";
}
```

```javascript
import isBun from "./isBun";
import isDeno from "./isDeno";
import isNode from "./isNode";

function isServer() {
  return isNode() || isDeno() || isBun() || typeof window === "undefined";
}
```
:::

## References

- [Global Object `window`](https://developer.mozilla.org/en-US/docs/Web/API/Window)