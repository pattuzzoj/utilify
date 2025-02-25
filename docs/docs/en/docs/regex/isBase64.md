# isBase64

The `isBase64` function checks if a given string is a valid Base64 encoded string.

## Syntax

```typescript
function isBase64(value: string): boolean
```

### Parameters

| Name | Type     | Description                                      |
|------|----------|--------------------------------------------------|
| value  | `string` | The string to be checked for valid Base64 format. |

### Return

| Type     | Description                                      |
|----------|--------------------------------------------------|
| `boolean` | Returns `true` if the string is a valid Base64 format, otherwise returns `false`. |

## Examples

```typescript
console.log(isBase64("U29mdHdhcmU="));    // Output: true
console.log(isBase64("U29m^dhd2Y="));     // Output: false
console.log(isBase64("YWJjZA=="));        // Output: true
console.log(isBase64("abc123"));          // Output: false
```

## Notes

- The function uses a regular expression to check if the string follows the Base64 encoding pattern.
- Base64 encoding is used to represent binary data in a textual format, including symbols like `+`, `/`, and the `=` character at the end for padding.

## Code

::: code-group
```typescript
function isBase64(value: string): boolean {
  return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value);
}
```

```javascript
function isBase64(value) {
  return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value);
}
```
:::

## References

- [Base64 - Wikipedia](https://en.wikipedia.org/wiki/Base64)
- [RegExp.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)