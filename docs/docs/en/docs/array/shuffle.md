# shuffle

The `shuffle` function randomly reorders elements in an array using the Fisher-Yates shuffle algorithm.

## Syntax

```typescript
function shuffle<T>(arr: T[]): T[];
```

### Parameters

| Name  | Type   | Description                                      |
|-------|--------|--------------------------------------------------|
| `arr` | `T[]`  | The array to shuffle.                            |

### Return

| Type   | Description                                           |
|--------|-------------------------------------------------------|
| `T[]`  | The same array with its elements randomly reordered.   |

## Examples

```typescript
console.log(shuffle([1, 2, 3, 4, 5]));          // e.g., [3, 1, 5, 2, 4]
console.log(shuffle(['a', 'b', 'c', 'd']));     // e.g., ['c', 'a', 'd', 'b']

// Multiple shuffles produce different results
const arr = [1, 2, 3, 4];
console.log(shuffle([...arr]));                 // e.g., [2, 4, 1, 3]
console.log(shuffle([...arr]));                 // e.g., [3, 1, 4, 2]
```

## Notes

- Modifies the input array in place and returns it
- Uses the Fisher-Yates (Knuth) shuffle algorithm
- For immutable shuffling, pass a copy of the array: `shuffle([...arr])`
- The randomness quality depends on Math.random()

## Source Code

::: code-group
```typescript
function shuffle<T>(arr: T[]): T[] {
  for (let index = arr.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [arr[index], arr[randomIndex]] = [arr[randomIndex] as T, arr[index] as T];
  }

  return arr;
}
```

```javascript
function shuffle(arr) {
  for (let index = arr.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
  }

  return arr;
}
```
:::

## References

- [Fisher-Yates Shuffle - Wikipedia](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
- [Math.random() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)