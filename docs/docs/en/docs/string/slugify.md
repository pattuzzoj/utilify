# slugify

The `slugify` function converts a string into a URL-friendly format by removing special characters, converting everything to lowercase, and replacing spaces with hyphens.

## Syntax

```typescript
function slugify(str: string): string
```

### Parameters

| Name  | Type     | Description                                          |
|-------|----------|----------------------------------------------------|
| str   | `string` | The string to be converted into a slug format.     |

### Returns

| Type    | Description                                      |
|---------|------------------------------------------------|
| `string` | The string converted to a slug format.          |

## Examples

```typescript
console.log(slugify("Hello World!"));            // Output: "hello-world"
console.log(slugify("JavaScript is fun!"));      // Output: "javascript-is-fun"
console.log(slugify("  Extra spaces here!  "));  // Output: "extra-spaces-here"
console.log(slugify("Título com acentuação!"));  // Output: "titulo-com-acentuacao"
```

## Notes

- The function uses `trim()` to remove any leading or trailing spaces from the string.
- It removes special characters using `replace(/[!@#$%^&*()\-=+[\]{}|\\~;:'",.<>?\/]/g, "")`.
- The string is then converted to lowercase with `toLowerCase()`.
- Spaces are replaced with hyphens using `replace(/\s+/g, '-')`.
- The string is normalized with `normalize('NFD')` and accents are removed with `replace(/[\u0300-\u036f]/g, '')`.

## Source Code

::: code-group
```typescript
function slugify(str: string): string {
  return str
  .trim()
  .replace(/[!@#$%^&*()\-=+[\]{}|\\~;:'",.<>?\/]/g, "")
  .toLowerCase()
  .replace(/\s+/g, '-')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');
}
```

```javascript
function slugify(str) {
  return str
  .trim()
  .replace(/[!@#$%^&*()\-=+[\]{}|\\~;:'",.<>?\/]/g, "")
  .toLowerCase()
  .replace(/\s+/g, '-')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');
}
```
::: 

## References

- [String.prototype.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [String.prototype.normalize()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)