# invertCase

The `invertCase` function inverts the case of each character in a string. It converts lowercase letters to uppercase and uppercase letters to lowercase, while leaving non-alphabetical characters unchanged.

## Syntax

```typescript
function invertCase(str: string): string
```

### Parameters

| Name  | Type     | Description                                      |
|-------|----------|--------------------------------------------------|
| str   | `string` | The string whose case will be inverted.          |

### Returns

| Type    | Description                                      |
|---------|--------------------------------------------------|
| `string` | The string with each character's case inverted.  |

## Examples

```typescript
console.log(invertCase("Hello World"));  // Output: "hELLO wORLD"
console.log(invertCase("JavaScript"));   // Output: "jAVAsCRIPT"
console.log(invertCase("12345"));        // Output: "12345" (no change)
```

## Notes

- The function uses `split("")` to break the string into an array of characters.
- It then maps each character, using `isLowerCase` and `isUpperCase` to determine if it should be converted to uppercase or lowercase, respectively.
- The result is then joined back into a string using `join("")`.

## Source Code

::: code-group
```typescript
import isLowerCase from "./isLowerCase";
import isUpperCase from "./isUpperCase";

function invertCase(str: string): string {
  return str.split("").map((str) => {
    if (isLowerCase(str)) {
      return str.toUpperCase();
    } else if (isUpperCase(str)) {
      return str.toLowerCase();
    }

    return str;
  }).join("");
}
```

```javascript
import isLowerCase from "./isLowerCase";
import isUpperCase from "./isUpperCase";

function invertCase(str) {
  return str.split("").map((str) => {
    if (isLowerCase(str)) {
      return str.toUpperCase();
    } else if (isUpperCase(str)) {
      return str.toLowerCase();
    }

    return str;
  }).join("");
}
```
::: 

## References

- [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)