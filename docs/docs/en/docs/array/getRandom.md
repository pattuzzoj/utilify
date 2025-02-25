# getRandom

The `getRandom` function returns a random element from an array or character from a string.

## Syntax

```typescript
function getRandom(str: string): string;
function getRandom<T>(arr: T[]): T;
```

### Parameters

| Name  | Type      | Description                                                      |
|-------|-----------|------------------------------------------------------------------|
| `str` | `string`  | The input string from which a random character will be selected.  |
| `arr` | `T[]`     | The input array from which a random element will be selected.     |

### Return

| Type     | Description                                                               |
|----------|---------------------------------------------------------------------------|
| `string` | A random character if input is string.                                     |
| `T`      | A random element if input is array.                                        |

## Examples

```typescript
console.log(getRandom([1, 2, 3, 4, 5])); // Can return any element from the array
console.log(getRandom("hello"));         // Can return 'h', 'e', 'l', or 'o'
```

## Notes

- The function uses `Math.random` and `Math.floor` to select a random index.
- Works with both strings and arrays.

## Source Code

::: code-group
```typescript
function getRandom(str: string): string;
function getRandom<T>(arr: T[]): T;
function getRandom(arr: any): any {
  return arr[Math.floor(Math.random() * arr.length)];
}
```

```javascript
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
```
:::

## References

- [Math.random() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Math.floor() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)