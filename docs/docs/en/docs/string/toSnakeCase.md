# toSnakeCase

The `toSnakeCase` function converts a string into snake_case format, where spaces are replaced with underscores and all letters are transformed to lowercase.

## Syntax

```typescript
function toSnakeCase(str: string): string
```

### Parameters

| Name  | Type     | Description                                          |
|-------|----------|----------------------------------------------------|
| str   | `string` | The string to be converted into snake_case.        |

### Returns

| Type    | Description                                      |
|---------|------------------------------------------------|
| `string` | The string converted to snake_case.             |

## Examples

```typescript
console.log(toSnakeCase("Hello World"));         // Output: "hello_world"
console.log(toSnakeCase("JavaScript is fun"));   // Output: "javascript_is_fun"
console.log(toSnakeCase("Singleword"));          // Output: "singleword"
console.log(toSnakeCase("  Extra spaces here ")); // Output: "extra_spaces_here"
```

## Notes

- The function uses `trim()` to remove any spaces from the beginning and end of the string.
- It then transforms the entire string to lowercase with `toLowerCase()`.
- Finally, it replaces all spaces with underscores using `replace(/\s+/g, "_")`.

## Source Code

::: code-group
```typescript
function toSnakeCase(str: string): string {
  return str
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "_");
}
```

```javascript
function toSnakeCase(str) {
  return str
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "_");
}
```
::: 

## References

- [String.prototype.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)