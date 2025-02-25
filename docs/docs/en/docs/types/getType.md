# getType  
Returns the exact type of a value, identifying it based on the `Object.prototype.toString` function. The function handles special values like `NaN` and `Infinity`, returning more precise identifiers for these cases. The main advantage of this approach is the ability to distinguish complex types, such as `Map`, `Set`, `Promise`, `Date`, `RegExp`, `Array`, `Function`, among others.

## Syntax
```typescript
function getType(value: any): string
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `value`   | `any`     | The value to be checked. Can be any type. |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `string` | Returns a string representing the type of the value. Possible values include `"object"`, `"array"`, `"string"`, `"number"`, `"nan"`, `"infinity"`, and other complex types such as `"map"`, `"set"`, `"promise"`, `"date"`, `"regexp"`, `"function"`, etc. |

## Examples

### Example 1: Checking common value types
```typescript
getType(42); // "number"
getType("Hello"); // "string"
getType([]); // "array"
getType({}); // "object"
```

### Example 2: Checking special values
```typescript
getType(NaN); // "nan"
getType(Infinity); // "infinity"
getType(-Infinity); // "infinity"
```

### Example 3: More complex types
```typescript
getType(new Map()); // "map"
getType(new Set()); // "set"
getType(new Promise(() => {})); // "promise"
getType(new Date()); // "date"
getType(/regex/); // "regexp"
```

### Example 4: Checking other types
```typescript
getType(true); // "boolean"
getType(null); // "null"
getType(undefined); // "undefined"
getType(function() {}); // "function"
```

## Notes
- The function uses `Object.prototype.toString.call(value)` to ensure accurate type detection, even for types like `null`, arrays, or functions.
- For `number` values, the function performs additional checks to identify `NaN` and `Infinity`:
  - If the value is `NaN`, the function returns `"nan"`.
  - If the value is `Infinity` or `-Infinity`, the function returns `"infinity"`.
- The function can distinguish between complex object types like `Map`, `Set`, `Promise`, `Date`, and `RegExp`, through their unique identifiers returned by `Object.prototype.toString`.
- This is possible because `Object.prototype.toString` returns a string in the format `[object Type]`, where `Type` can be any of the native JavaScript types, including those that are often difficult to differentiate using the `typeof` operator.

## Source Code
::: code-group

```typescript
function getType(value: any): string {
  const type = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

  if (type === "number") {
    if (isNaN(value)) return "nan";
    if (!isFinite(value)) return "infinity";
  }

  return type;
}
```

```javascript
function getType(value) {
  const type = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

  if (type === "number") {
    if (isNaN(value)) return "nan";
    if (!isFinite(value)) return "infinity";
  }

  return type;
}
```
:::

## References
- [MDN: `Object.prototype.toString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
- [MDN: `isNaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
- [MDN: `isFinite`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite)