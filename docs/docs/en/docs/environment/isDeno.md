# isDeno

The `isDeno` function checks whether the current runtime environment is [Deno](https://deno.land), a secure runtime for JavaScript and TypeScript.

## Syntax

```typescript
function isDeno(): boolean;
```

### Returns

| Type      | Description                                              |
|-----------|----------------------------------------------------------|
| `boolean` | Returns `true` if the runtime is Deno; otherwise, `false`. |

## Examples

```typescript
console.log(isDeno()); // true if running in Deno, false otherwise
```

## Notes

- The function uses the global `Deno` object to determine if the runtime is Deno. Specifically, it checks if `Deno` exists and has the `version` property.
- Useful for running Deno-specific code or identifying the runtime environment.

## Source Code

::: code-group
```typescript
function isDeno(): boolean {
  return typeof Deno === 'object' && Object.hasOwn(Deno, 'version');
}
```

```javascript
function isDeno() {
  return typeof Deno === 'object' && Object.hasOwn(Deno, 'version');
}
```
:::

## References

- [Deno Documentation](https://deno.land/manual)
- [Object.hasOwn - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)