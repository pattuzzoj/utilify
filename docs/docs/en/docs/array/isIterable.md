# isIterable

The `isIterable` function checks if a value implements the iterable protocol.

## Syntax

```typescript
function isIterable(value: any): boolean;
```

### Parameters

| Name    | Type    | Description                                      |
|---------|---------|--------------------------------------------------|
| `value` | `any`   | The value to be checked for iterability.         |

### Return

| Type      | Description                                                       |
|-----------|-------------------------------------------------------------------|
| `boolean` | `true` if the value is iterable (has Symbol.iterator), otherwise `false`. |

## Examples

```typescript
console.log(isIterable([1, 2, 3]));     // true
console.log(isIterable("hello"));        // true
console.log(isIterable(new Set([1,2]))); // true
console.log(isIterable(123));            // false
console.log(isIterable(null));           // false
console.log(isIterable(undefined));      // false
```

## Notes

- The function checks if the value is not null/undefined and has a Symbol.iterator method
- Arrays, strings, Sets, Maps, and other built-in iterables will return true
- Plain objects and primitives (except strings) will return false

## Source Code

::: code-group
```typescript
function isIterable(value: any): boolean {
  return value != null && typeof value?.[Symbol.iterator] === 'function';
}
```

```javascript
function isIterable(value) {
  return value != null && typeof value?.[Symbol.iterator] === 'function';
}
```
:::

## References

- [Symbol.iterator - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
- [Iteration protocols - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)