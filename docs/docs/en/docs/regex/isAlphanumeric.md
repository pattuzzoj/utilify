# isAlphanumeric

The `isAlphanumeric` function checks if a string contains only alphanumeric characters (letters and numbers).

## Syntax

```typescript
function isAlphanumeric(value: string): boolean
```

### Parameters

| Name | Type     | Description                                  |
|------|----------|----------------------------------------------|
| value  | `string` | The string to be validated as alphanumeric. |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean` | Returns `true` if the string contains only letters and numbers, otherwise returns `false`. |

## Examples

```typescript
console.log(isAlphanumeric("abc123"));      // Output: true
console.log(isAlphanumeric("abcABC123"));   // Output: true
console.log(isAlphanumeric("abc 123"));     // Output: false
console.log(isAlphanumeric("123456"));      // Output: true
console.log(isAlphanumeric("hello_world")); // Output: false
```

## Notes

- The function checks if the string contains only alphanumeric characters (letters and numbers).
- Spaces, special characters, or other symbols will result in `false`.

## Code

::: code-group
```typescript
function isAlphanumeric(value: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(value);
}
```

```javascript
function isAlphanumeric(value) {
  return /^[a-zA-Z0-9]+$/.test(value);
}
```
:::

## References

- [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [string.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)