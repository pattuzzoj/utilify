# maskString

The `maskString` function applies a mask to a specific part of a string, leaving the start and end of the string unchanged.

## Syntax

```typescript
function maskString(str: string, mask: string, maskStart: number, maskLength: number): string
```

### Parameters

| Name       | Type     | Description                                                        |
|------------|----------|--------------------------------------------------------------------|
| str        | `string` | The string to which the mask will be applied.                      |
| mask       | `string` | The character or set of characters to be used for masking.        |
| maskStart  | `number` | The starting index of the part of the string to be masked.        |
| maskLength | `number` | The length of the part of the string to be masked.                 |

### Returns

| Type    | Description                                        |
|---------|----------------------------------------------------|
| `string` | The string with the masked portion.                |

## Examples

```typescript
console.log(maskString("123456789", "*", 3, 4)); // Output: "1234****89"
console.log(maskString("Hello World", "#", 6, 5)); // Output: "Hello #####"
console.log(maskString("abcdef", "X", 1, 2)); // Output: "aXXdef"
```

## Notes

- The function uses `Math.min(maskLength, str.length - maskStart)` to ensure the mask length doesn't exceed the end of the string.
- The string is split into three parts: the start (`start`), the masked portion (`masked`), and the end (`end`), and then these parts are concatenated together.

## Source Code

::: code-group
```typescript
function maskString(str: string, mask: string, maskStart: number, maskLength: number) {
  maskLength = Math.min(maskLength, str.length - maskStart);

  const start = str.slice(0, maskStart);
  const end = str.slice(maskStart + maskLength);
  const masked = mask.repeat(maskLength);

  return start + masked + end;
}
```

```javascript
function maskString(str, mask, maskStart, maskLength) {
  maskLength = Math.min(maskLength, str.length - maskStart);

  const start = str.slice(0, maskStart);
  const end = str.slice(maskStart + maskLength);
  const masked = mask.repeat(maskLength);

  return start + masked + end;
}
```
::: 

## References

- [String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [String.prototype.repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)