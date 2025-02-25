# isUUID

The `isUUID` function checks whether a given string is a valid UUID (version-agnostic).

## Syntax

```typescript
function isUUID(value: string): boolean
```

### Parameters

| Name | Type     | Description                        |
|------|----------|------------------------------------|
| value  | `string` | The string to be validated as a UUID. |

### Returns

| Type      | Description                            |
|-----------|----------------------------------------|
| `boolean` | Returns `true` if the string is a valid UUID, otherwise `false`. |

## Examples

```typescript
import { isUUID } from "@utilify/regex";

console.log(isUUID("123e4567-e89b-12d3-a456-426614174000")); // Output: true
console.log(isUUID("not-a-uuid")); // Output: false
console.log(isUUID("123e4567-e89b-12d3-a456")); // Output: false
```

## Notes

- A UUID is a 36-character string following the format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.
- The function is version-agnostic and does not check for specific UUID versions.
- The validation is performed using a regular expression that matches the UUID pattern.

## Source Code

::: code-group
```typescript
function isUUID(value: string): boolean {
  return /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/.test(value);
}
```

```javascript
function isUUID(value) {
  return /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/.test(value);
}
```
::: 

## References

- [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [string.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)