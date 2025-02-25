# isLowerCase

The `isLowerCase` function checks if all alphabetic characters in a string are lowercase, ignoring whitespace.

## Syntax

```typescript
function isLowerCase(str: string): boolean
```

### Parameters

| Name  | Type     | Description                                      |
|-------|----------|--------------------------------------------------|
| str   | `string` | The string to be checked.                        |

### Returns

| Type    | Description                                      |
|---------|--------------------------------------------------|
| `boolean` | Returns `true` if all alphabetic characters are lowercase, otherwise returns `false`. |

## Examples

```typescript
console.log(isLowerCase("hello"));        // Output: true
console.log(isLowerCase("Hello World"));  // Output: false
console.log(isLowerCase("javaScript"));   // Output: false
console.log(isLowerCase("lower case"));   // Output: true
```

## Notes

- The function uses a regular expression to check that the string does not contain any uppercase letters, after removing whitespace with `replace(/\s+/g, "")`.
- The regular expression `/^(?!.*[A-Z]).*[a-z].*$/` ensures that the string contains at least one lowercase letter and no uppercase letters.

## Source Code

::: code-group
```typescript
function isLowerCase(str: string): boolean {
  return /^(?!.*[A-Z]).*[a-z].*$/.test(str.replace(/\s+/g, ""));
}
```

```javascript
function isLowerCase(str) {
  return /^(?!.*[A-Z]).*[a-z].*$/.test(str.replace(/\s+/g, ""));
}
```
::: 

## References

- [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)