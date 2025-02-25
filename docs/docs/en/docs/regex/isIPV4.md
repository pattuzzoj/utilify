# isIPV4

The `isIPV4` function checks whether a string is a valid IPv4 address.

## Syntax

```typescript
function isIPV4(value: string): boolean
```

### Parameters

| Name | Type     | Description                                  |
|------|----------|----------------------------------------------|
| value  | `string` | The string to be validated as an IPv4 address. |

### Return

| Type     | Description                                    |
|----------|------------------------------------------------|
| `boolean` | Returns `true` if the string is a valid IPv4 address, otherwise returns `false`. |

## Examples

```typescript
console.log(isIPV4("192.168.1.1"));             // Output: true
console.log(isIPV4("255.255.255.255"));         // Output: true
console.log(isIPV4("192.168.1.999"));           // Output: false
console.log(isIPV4("::1"));                     // Output: false
console.log(isIPV4("192.168.1.1:8080"));       // Output: true
```

## Notes

- The function uses a regular expression to check the valid format of an IPv4 address.
- It also validates the possibility of a port number being included after the IPv4 address (e.g., `192.168.1.1:8080`).

## Source Code

::: code-group
```typescript
function isIPV4(value: string): boolean {
  return /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/.test(value);
}
```

```javascript
function isIPV4(value) {
  return /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/.test(value);
}
```
::: 

## References

- [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [string.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)