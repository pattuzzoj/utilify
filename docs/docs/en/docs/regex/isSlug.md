# isSlug

The `isSlug` function checks whether a given string is a valid slug.

## Syntax

```typescript
function isSlug(value: string): boolean
```

### Parameters

| Name | Type     | Description                    |
|------|----------|--------------------------------|
| value  | `string` | The string to be validated as a slug. |

### Returns

| Type      | Description                                     |
|-----------|-------------------------------------------------|
| `boolean` | Returns `true` if the string is a valid slug, otherwise `false`. |

## Examples

```typescript
console.log(isSlug("valid-slug")); // Output: true
console.log(isSlug("valid-slug-123")); // Output: true
console.log(isSlug("Invalid Slug")); // Output: false
console.log(isSlug("invalid_slug")); // Output: false
console.log(isSlug("invalid--slug")); // Output: false
```

## Notes

- A valid slug:
  - Contains only lowercase letters (`a-z`), numbers (`0-9`), and hyphens (`-`).
  - Does not contain consecutive hyphens.
  - Does not start or end with a hyphen.
- The function uses a regular expression to validate the slug format.

## Source Code

::: code-group
```typescript
function isSlug(value: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}
```

```javascript
function isSlug(value) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}
```
::: 

## References

- [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [string.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)