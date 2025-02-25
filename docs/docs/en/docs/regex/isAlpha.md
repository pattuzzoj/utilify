# isAlpha

The `isAlpha` function checks if a string contains only alphabetic characters (uppercase and lowercase letters).

## Syntax

```typescript
function isAlpha(value: string): boolean
```

### Parameters

| Name | Type     | Description                              |
|------|----------|------------------------------------------|
| value  | `string` | The string to be validated as alphabetic. |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean` | Returns `true` if the string contains only letters, otherwise returns `false`. |

## Examples

```typescript
console.log(isAlpha("abcABC"));      // Output: true
console.log(isAlpha("abc"));         // Output: true
console.log(isAlpha("ABC"));         // Output: true
console.log(isAlpha("abc123"));      // Output: false
console.log(isAlpha("123"));         // Output: false
console.log(isAlpha("hello world")); // Output: false
```

## Notes

- The function checks if the string contains only characters from the English alphabet (uppercase or lowercase).
- Special characters, numbers, or spaces will result in `false`.

## Code

::: code-group
```typescript
function isAlpha(value: string): boolean {
  return /^[a-zA-Z]+$/.test(value);
}
```

```javascript
function isAlpha(value) {
  return /^[a-zA-Z]+$/.test(value);
}
```
:::

## References

- [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [string.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)