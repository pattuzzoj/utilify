# capitalize

The `capitalize` function transforms the first letter of a string to uppercase and keeps the rest unchanged.

## Syntax

```typescript
function capitalize(str: string): string
```

### Parameters

| Name  | Type     | Description                                      |
|-------|----------|--------------------------------------------------|
| str   | `string` | The string whose first letter will be capitalized. |

### Returns

| Type    | Description                                      |
|---------|--------------------------------------------------|
| `string` | The string with the first letter in uppercase and the rest unchanged. |

## Examples

```typescript
console.log(capitalize("hello"));  // Output: "Hello"
console.log(capitalize("world"));  // Output: "World"
console.log(capitalize("javaScript")); // Output: "JavaScript"
```

## Notes

- The function uses the `charAt(0)` method to access the first character of the string and `toUpperCase()` to transform it to uppercase.
- Then, it uses `concat()` to join the uppercase letter with the rest of the string, obtained using `slice(1)`.

## Source Code

::: code-group
```typescript
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase().concat(str.slice(1));
}
```

```javascript
function capitalize(str) {
  return str.charAt(0).toUpperCase().concat(str.slice(1));
}
```
::: 

## References

- [String.prototype.charAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
- [String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)