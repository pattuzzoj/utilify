# toPascalCase

The `toPascalCase` function converts a string to PascalCase format, where each word starts with an uppercase letter, and all spaces between words are removed.

## Syntax

```typescript
function toPascalCase(str: string): string
```

### Parameters

| Name  | Type     | Description                                          |
|-------|----------|----------------------------------------------------|
| str   | `string` | The string to be converted to PascalCase.          |

### Returns

| Type    | Description                                      |
|---------|------------------------------------------------|
| `string` | The string converted to PascalCase.             |

## Examples

```typescript
console.log(toPascalCase("hello world"));         // Output: "HelloWorld"
console.log(toPascalCase("java script is fun"));  // Output: "JavaScriptIsFun"
console.log(toPascalCase("singleword"));          // Output: "Singleword"
console.log(toPascalCase("  extra spaces here ")); // Output: "ExtraSpacesHere"
```

## Notes

- The function uses `trim()` to remove spaces from the beginning and end of the string.
- It splits the string into words using `split(" ")`, capitalizes the first letter of each word using `toUpperCase()`, and joins them back together.
- Finally, it removes any remaining spaces using `replace(/\s+/g, "")`.

## Source Code

::: code-group
```typescript
function toPascalCase(str: string): string {
  return str.trim().split(" ").map((str) => {
    return str[0].toUpperCase().concat(str.slice(1));
  }).join(" ").replace(/\s+/g, "");
}
```

```javascript
function toPascalCase(str) {
  return str.trim().split(" ").map((str) => {
    return str[0].toUpperCase().concat(str.slice(1));
  }).join(" ").replace(/\s+/g, "");
}
```
::: 

## References

- [String.prototype.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)