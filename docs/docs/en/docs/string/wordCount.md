# wordCount

The `wordCount` function counts the number of words in a string, ignoring extra spaces at the beginning, end, and between words.

## Syntax

```typescript
function wordCount(str: string): number
```

### Parameters

| Name  | Type     | Description                                          |
|-------|----------|----------------------------------------------------|
| str   | `string` | The string to be analyzed.                        |

### Returns

| Type    | Description                                      |
|---------|------------------------------------------------|
| `number` | The number of words in the string.     |

## Examples

```typescript
console.log(wordCount("Hello World"));           // Output: 2
console.log(wordCount("  JavaScript  is awesome  "));  // Output: 3
console.log(wordCount("  singleword "));         // Output: 1
console.log(wordCount(""));                      // Output: 0
```

## Notes

- The function uses `trim()` to remove spaces at the beginning and end of the string.
- It then uses `replace(/\s+/g, " ")` to replace multiple spaces with a single space.
- Finally, the string is split using `split(" ")`, and the number of words is obtained by the length of the resulting array.

## Source Code

::: code-group
```typescript
function wordCount(str: string): number {
  return str
  .trim()
  .replace(/\s+/g, " ")
  .split(" ").length;
}
```

```javascript
function wordCount(str) {
  return str
  .trim()
  .replace(/\s+/g, " ")
  .split(" ").length;
}
```
::: 

## References

- [String.prototype.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)