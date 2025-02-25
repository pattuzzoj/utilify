# isJSON  
Checks if the provided string is a valid JSON. The function attempts to parse the string using `JSON.parse`. If the parsing is successful, the function returns `true`, indicating the string is a valid JSON. Otherwise, it returns `false`.

## Syntax
```typescript
function isJSON(value: string): boolean
```

### Parameters

| Parameter | Type     | Description                              |
|-----------|----------|------------------------------------------|
| `value`   | `string` | The string to be checked.               |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean`| Returns `true` if the string is a valid JSON, otherwise returns `false`. |

## Examples

### Example 1: Checking valid JSON
```typescript
isJSON('{"name": "John", "age": 30}'); // true
isJSON('{"key": "value"}'); // true
```

### Example 2: Checking invalid JSON
```typescript
isJSON('{"name": "John", "age": 30'); // false (syntax error in JSON)
isJSON('Hello, world!'); // false (not a JSON)
```

## Notes
- The function uses `JSON.parse` to attempt to convert the string into a JSON object. If the string is not a valid JSON, the method throws an exception, which is caught in the `catch` block, returning `false`.
- It's important to note that the function only checks if the string is a valid JSON in terms of syntax. It does not validate the types or the structure of the data within the JSON.

## Source Code
::: code-group

```typescript
function isJSON(value: string): boolean {
  try {
    JSON.parse(value);
    return true;
  } catch (error) {
    return false;
  }
}
```

```javascript
function isJSON(value) {
  try {
    JSON.parse(value);
    return true;
  } catch (error) {
    return false;
  }
}
```
:::

## References
- [MDN: `JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)