# toCamelCase

The `toCamelCase` function converts a string to camelCase format, where the first word is in lowercase, and each subsequent word starts with an uppercase letter, with all spaces removed.

## Syntax

```typescript
function toCamelCase(str: string): string
```

### Parameters

| Name  | Type     | Description                                          |
|-------|----------|----------------------------------------------------|
| str   | `string` | The string to be converted to camelCase.           |

### Returns

| Type    | Description                                      |
|---------|------------------------------------------------|
| `string` | The string converted to camelCase.              |

## Examples

```typescript
console.log(toCamelCase("hello world"));         // Output: "helloWorld"
console.log(toCamelCase("java script is fun"));  // Output: "javaScriptIsFun"
console.log(toCamelCase("singleword"));          // Output: "singleword"
console.log(toCamelCase("  extra spaces here ")); // Output: "extraSpacesHere"
```

## Notes

- The function uses `trim()` to remove any leading and trailing spaces from the string.
- It transforms the entire string to lowercase with `toLowerCase()`.
- It splits the string into words using `split(" ")` and capitalizes the first letter of each word except the first one.
- Finally, it joins the words and removes all spaces using `replace(/\s+/g, "")`.

## Source Code

::: code-group
```typescript
function toCamelCase(str: string): string {
  return str.trim().toLowerCase().split(" ").map((str, index) => {
    if(index === 0) return str;

    return str[0].toUpperCase().concat(str.slice(1));
  }).join(" ").replace(/\s+/g, "");
}
```

```javascript
function toCamelCase(str) {
  return str.trim().toLowerCase().split(" ").map((str, index) => {
    if(index === 0) return str;

    return str[0].toUpperCase().concat(str.slice(1));
  }).join(" ").replace(/\s+/g, "");
}
```
::: 

## References

- [String.prototype.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)