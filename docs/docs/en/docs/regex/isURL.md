# isURL

The `isURL` function validates whether a given string is a valid URL.

## Syntax

```typescript
function isURL(value: string): boolean
```

### Parameters

| Name | Type     | Description                           |
|------|----------|---------------------------------------|
| value  | `string` | The string to be validated as a URL.  |

### Returns

| Type      | Description                                     |
|-----------|-------------------------------------------------|
| `boolean` | Returns `true` if the string is a valid URL, otherwise `false`. |

## Examples

```typescript
console.log(isURL("https://example.com")); // Output: true
console.log(isURL("http://example.com:8080/path")); // Output: true
console.log(isURL("www.example.com")); // Output: true
console.log(isURL("example")); // Output: false
console.log(isURL("ftp://example.com")); // Output: false
```

## Notes

- The function uses a regular expression to validate common URL valueuctures, including:
  - Optional protocols (`http://`, `https://`).
  - Optional `www.` prefix.
  - A domain with a top-level domain (e.g., `.com`, `.org`).
  - Optional ports (e.g., `:8080`).
  - Optional paths and query strings.
- The function does not validate uncommon protocols like `ftp` or custom schemes.

## Source Code

::: code-group
```typescript
function isURL(value: string): boolean { 
  return /^(https?:\/\/)?(www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(:[0-9]{1,5})?(\/[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=-]*)?$/.test(value);
}
```

```javascript
function isURL(value) { 
  return /^(https?:\/\/)?(www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(:[0-9]{1,5})?(\/[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=-]*)?$/.test(value);
}
```
::: 

## References

- [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [string.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)