# isEqual
The `isEqual` function compares two values to determine if they are equal using `Object.is`.

## Syntax

```typescript
isEqual(value1: any, value2: any): boolean;
```

### Parameters

| Parameter  | Type     | Description                                                        |
|------------|----------|--------------------------------------------------------------------|
| `value1`   | `any`    | The first value to compare.                                        |
| `value2`   | `any`    | The second value to compare.                                       |

### Return

| Type     | Description                                                        |
|----------|--------------------------------------------------------------------|
| `boolean`| `true` if the values are equal, otherwise `false`.                 |

## Examples

### Example 1: Comparing primitive values
```typescript
console.log(isEqual(10, 10));  // true
console.log(isEqual(10, 20));  // false
```

### Example 2: Comparing objects (same references)
```typescript
const obj1 = { name: 'Alice' };
const obj2 = obj1;

console.log(isEqual(obj1, obj2));  // true
```

### Example 3: Comparing objects (different references)
```typescript
const obj1 = { name: 'Alice' };
const obj2 = { name: 'Alice' };

console.log(isEqual(obj1, obj2));  // false
```

## Notes
- This function uses `Object.is`, which is more reliable than using `===` for strict comparison, as it accounts for special cases like `NaN` and `-0` vs `+0`.
- `Object.is` returns `true` only when both values are strictly equal, considering even differences in sign (e.g., `-0` vs `+0`).

## Dependencies
- Nenhuma.

## Source Code
::: code-group

```typescript
function isEqual(value1: any, value2: any): boolean {
	return Object.is(value1, value2);
}
```

```javascript
function isEqual(value1, value2) {
  return Object.is(value1, value2);
}
```
:::

## References
- [Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)