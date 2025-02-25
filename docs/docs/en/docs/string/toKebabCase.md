# toKebabCase

The `toKebabCase` function converts a string to kebab-case format, where spaces are replaced with hyphens and all letters are transformed to lowercase.

## Syntax

```typescript
function toKebabCase(str: string): string
```

### Parameters

| Name  | Type     | Description                                          |
|-------|----------|----------------------------------------------------|
| str   | `string` | The string to be converted to kebab-case.          |

### Returns

| Type    | Description                                      |
|---------|------------------------------------------------|
| `string` | The string converted to kebab-case.             |

## Examples

```typescript
console.log(toKebabCase("Hello World"));         // Output: "hello-world"
console.log(toKebabCase("JavaScript is fun"));   // Output: "javascript-is-fun"
console.log(toKebabCase("Singleword"));          // Output: "singleword"
console.log(toKebabCase("  Extra spaces here ")); // Output: "extra-spaces-here"
```

## Notes

- The function uses `trim()` to remove any spaces from the beginning and end of the string.
- It then transforms the entire string to lowercase with `toLowerCase()`.
- Finally, it replaces all spaces with hyphens using `replace(/\s+/g, "-")`.

## Source Code

::: code-group
```typescript
function toKebabCase(str: string): string {
  return str
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "-");
}
```

```javascript
function toKebabCase(str) {
  return str
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "-");
}
```
::: 

## References

- [String.prototype.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)