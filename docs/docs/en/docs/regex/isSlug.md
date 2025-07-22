## isSlug

The `isSlug` function checks if a string is in slug format, meaning it consists only of lowercase letters, numbers, and hyphens, without spaces or special characters.

### Syntax

```javascript
isSlug(value)
```

### Parameters

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `value`   | `string` | The string to be checked.                   |

### Return

| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | Returns `true` if the string is in slug format, otherwise returns `false`. |

### Examples

```javascript
isSlug('my-slug');         // true
isSlug('my-slug-123');     // true
isSlug('my_slug');         // false
isSlug('My-Slug');         // false
isSlug('my slug');         // false
isSlug('');                // false
```

### Notes

- Throws a `TypeError` if the provided value is not a string.
- Does not allow uppercase letters, spaces, or special characters.

### References

- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
