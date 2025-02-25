# isFalsy  
Verifies if the provided value is considered "falsy" in JavaScript. The function returns `true` if the value is one of the following: `undefined`, `null`, `false`, `NaN`, `0`, `0n`, or an empty string `""`. Otherwise, it returns `false`.

## Syntax
```typescript
function isFalsy(value: any): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `value`   | `any`     | The value to be checked. Can be any type. |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean`| Returns `true` if the value is "falsy", otherwise returns `false`. |

## Examples

### Example 1: Checking "falsy" values
```typescript
isFalsy(undefined); // true
isFalsy(null); // true
isFalsy(false); // true
isFalsy(NaN); // true
isFalsy(0); // true
isFalsy(0n); // true
isFalsy(""); // true
```

### Example 2: Checking "truthy" values
```typescript
isFalsy(42); // false
isFalsy("Hello"); // false
isFalsy([]); // false
isFalsy({}); // false
isFalsy(true); // false
```

## Notes
- The function directly compares the value with common "falsy" values in JavaScript using the `includes` method on an array.
- It’s important to note that `false`, `undefined`, `null`, `NaN`, `0`, `0n`, and `""` are values that, when converted to a boolean context, are treated as `false`. Therefore, they are referred to as "falsy values."

## Source Code
::: code-group

```typescript
function isFalsy(value: any): boolean {
  return [undefined, null, false, NaN, 0, 0n, ""].includes(value);
}
```

```javascript
function isFalsy(value) {
  return [undefined, null, false, NaN, 0, 0n, ""].includes(value);
}
```
:::

## References
- [MDN: Falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)