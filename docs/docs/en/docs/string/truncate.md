# truncate

The `truncate` function truncates a string to a specified length and appends "..." at the end if the string exceeds that length.

## Syntax

```typescript
function truncate(text: string, size: number): string
```

### Parameters

| Name  | Type     | Description                                          |
|-------|----------|----------------------------------------------------|
| text  | `string` | The string to be truncated.                         |
| size  | `number` | The maximum length of the string before truncating. |

### Returns

| Type    | Description                                      |
|---------|------------------------------------------------|
| `string` | The truncated string, with "..." appended if the string exceeds the specified length. |

## Examples

```typescript
console.log(truncate("Hello, World!", 5));        // Output: "Hello..."
console.log(truncate("JavaScript", 4));            // Output: "Java..."
console.log(truncate("Short", 10));                // Output: "Short"
console.log(truncate("Another test example", 7)); // Output: "Anothe..."
```

## Notes

- The function uses `slice(0, size)` to extract the substring up to the specified size.
- If the string exceeds the specified size, `"..."` is concatenated to the truncated string.

## Source Code

::: code-group
```typescript
function truncate(text: string, size: number): string {
  return text.slice(0, size).concat("...");
}
```

```javascript
function truncate(text, size) {
  return text.slice(0, size).concat("...");
}
```
::: 

## References

- [String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)