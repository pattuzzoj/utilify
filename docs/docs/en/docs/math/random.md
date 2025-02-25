# random

The `random` function generates a random integer within a specified range. The generated number will be an integer between `min` and `max` (inclusive).

## Syntax

```typescript
function random(min: number = 0, max: number = 10): number
```

### Parameters

| Name  | Type     | Description                                      |
|-------|----------|--------------------------------------------------|
| min   | `number` | The minimum value of the range (inclusive). The default value is 0. |
| max   | `number` | The maximum value of the range (inclusive). The default value is 10. |

### Returns

| Type    | Description                                      |
|---------|--------------------------------------------------|
| `number` | A random integer within the specified range. |

## Examples

```typescript
console.log(random());        // Output: random number between 0 and 10
console.log(random(1, 100));  // Output: random number between 1 and 100
console.log(random(50, 60)); // Output: random number between 50 and 60
```

## Notes

- The function uses `Math.random()` to generate a random number and `Math.floor()` to round it down, ensuring the generated value is an integer.
- The range is inclusive, meaning both `min` and `max` can be generated.

## Source Code

::: code-group
```typescript
function random(min: number = 0, max: number = 10): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
```

```javascript
function random(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
```
::: 

## References

- [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)