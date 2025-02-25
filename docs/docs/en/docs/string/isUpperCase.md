# isUpperCase

The `isUpperCase` function checks if all alphabetic characters in a string are uppercase, ignoring whitespace.

## Syntax

```typescript
function isUpperCase(str: string): boolean
```

### Parameters

| Name  | Type     | Description                                      |
|-------|----------|--------------------------------------------------|
| str   | `string` | The string to be checked.                        |

### Returns

| Type    | Description                                      |
|---------|--------------------------------------------------|
| `boolean` | Returns `true` if all alphabetic characters are uppercase, otherwise returns `false`. |

## Examples

```typescript
console.log(isUpperCase("HELLO"));        // Output: true
console.log(isUpperCase("Hello World"));  // Output: false
console.log(isUpperCase("JAVA"));         // Output: true
console.log(isUpperCase("lower case"));   // Output: false
```

## Notes

- The function uses a regular expression to check that the string does not contain any lowercase letters, after removing whitespace with `replace(/\s+/g, "")`.
- The regular expression `/^(?!.*[a-z]).*[A-Z].*$/` ensures that the string contains at least one uppercase letter and no lowercase letters.

## Source Code

::: code-group
```typescript
function isUpperCase(str: string): boolean {
  return /^(?!.*[a-z]).*[A-Z].*$/.test(str.replace(/\s+/g, ""));
}
```

```javascript
function isUpperCase(str) {
  return /^(?!.*[a-z]).*[A-Z].*$/.test(str.replace(/\s+/g, ""));
}
```
::: 

## References

- [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)