# isBun

The `isBun` function checks if the current runtime environment is [Bun](https://bun.sh), a modern JavaScript runtime.

## Syntax

```typescript
function isBun(): boolean;
```

### Returns

| Type      | Description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| `boolean` | Returns `true` if the runtime is Bun, otherwise `false`.                   |

## Examples

```typescript
console.log(isBun()); // true if running in Bun, false otherwise
```

## Notes

- The function uses the global `Bun` object to determine if the runtime is Bun. It specifically checks if `Bun` exists and has a `version` property.
- This is useful for runtime-specific optimizations or features.

## Source Code

::: code-group
```typescript
function isBun(): boolean {
  return typeof Bun === 'object' && Object.hasOwn(Bun, 'version');
}
```

```javascript
function isBun() {
  return typeof Bun === 'object' && Object.hasOwn(Bun, 'version');
}
```
:::

## References

- [Bun Documentation](https://bun.sh/docs)
- [Object.hasOwn - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)