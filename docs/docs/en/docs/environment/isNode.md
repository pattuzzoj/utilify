# isNode

The `isNode` function checks whether the current runtime environment is [Node.js](https://nodejs.org/).

## Syntax

```typescript
function isNode(): boolean;
```

### Returns

| Type      | Description                                              |
|-----------|----------------------------------------------------------|
| `boolean` | Returns `true` if the runtime is Node.js; otherwise, `false`. |

## Examples

```typescript
console.log(isNode()); // true if running in Node.js, false otherwise
```

## Notes

- The function checks for the existence of the `global` and `process` objects, which are unique to Node.js environments.
- Useful for distinguishing between Node.js and other JavaScript runtimes, such as browsers or Deno.

## Source Code

::: code-group
```typescript
function isNode(): boolean {
  return typeof global !== "undefined" && typeof process !== "undefined";
}
```

```javascript
function isNode() {
  return typeof global !== "undefined" && typeof process !== "undefined";
}
```
:::

## References

- [Node.js Global Objects](https://nodejs.org/api/globals.html)
- [Node.js Process Object](https://nodejs.org/api/process.html)