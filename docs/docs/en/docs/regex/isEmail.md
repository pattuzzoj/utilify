# isEmail

The `isEmail` function checks whether a string is a valid email address.

## Syntax

```typescript
function isEmail(value: string): boolean
```

### Parameters

| Name | Type     | Description                                 |
|------|----------|---------------------------------------------|
| value  | `string` | The string to be validated as an email.     |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean` | Returns `true` if the string is a valid email, otherwise returns `false`. |

## Examples

```typescript
console.log(isEmail("user@example.com"));       // Output: true
console.log(isEmail("user.name@domain.co"));     // Output: true
console.log(isEmail("user@subdomain.example.com")); // Output: true
console.log(isEmail("invalid-email"));           // Output: false
console.log(isEmail("user@domain"));             // Output: false
```

## Notes

- The function uses a regular expression to validate the basic valueucture of an email address.
- It checks if the email follows the general pattern `local-part@domain`.

## Source Code

::: code-group
```typescript
function isEmail(value: string): boolean {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
}
```

```javascript
function isEmail(value) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
}
```
:::

## References

- [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [string.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)