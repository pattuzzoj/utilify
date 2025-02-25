# isTruthy  
Checks if the provided value is considered "truthy" in a boolean context, i.e., if it's not a "falsy" value. The function uses the `isFalsy` function to identify if the value is "falsy" and returns the opposite of that.

## Syntax
```typescript
function isTruthy(value: any): boolean
```

### Parameters

| Parameter | Type       | Description                                 |
|-----------|------------|---------------------------------------------|
| `value`   | `any`      | The value to be checked. Can be of any type. |

### Return

| Type     | Description                                   |
|----------|---------------------------------------------|
| `boolean`| Returns `true` if the value is not "falsy", otherwise returns `false`. |

## Examples

### Example 1: Checking for "truthy" values
```typescript
isTruthy("Hello"); // true
isTruthy(42); // true
isTruthy([]); // true
isTruthy({}); // true
```

### Example 2: Checking for "falsy" values
```typescript
isTruthy(null); // false
isTruthy(undefined); // false
isTruthy(0); // false
isTruthy(""); // false
```

## Notes
- The `isTruthy` function is essentially the inverse of the `isFalsy` function, meaning it returns `true` for all values that are evaluated as "truthy" in JavaScript, and `false` for "falsy" values.
- The function depends on a prior implementation of `isFalsy`, which handles the check for "falsy" values.

## Dependencies
[`isFalsy`](./isFalsy.md) ([`@utilify/boolean`](./)): Checks if a value is "falsy".

## Source Code
::: code-group

```typescript
import isFalsy from "./isFalsy";

function isTruthy(value: any): boolean {
  return !isFalsy(value);
}
```

```javascript
import isFalsy from "./isFalsy";

function isTruthy(value) {
  return !isFalsy(value);
}
```
:::

## References
- [MDN: Falsy values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#making_comparisons)