# pick
The `pick` function creates a new object containing only the specified keys from the original object.

## Syntax

```typescript
pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>
```

### Parameters

| Parameter | Type                        | Description                                      |
|-----------|-----------------------------|--------------------------------------------------|
| `obj`     | `T`                         | The source object from which to pick properties. |
| `keys`    | `K[]`                       | An array of keys to include in the resulting object. |

### Return

| Type        | Description                                              |
|-------------|----------------------------------------------------------|
| `Pick<T, K>` | A new object containing only the specified keys and their associated values. |

## Examples

### Example 1
```typescript
const user = { id: 1, name: "Alice", age: 25, isAdmin: true };
const picked = pick(user, ["id", "name"]);
console.log(picked); // { id: 1, name: "Alice" }
```

### Example 2
```typescript
const config = { debug: true, theme: "dark", language: "en" };
const pickedConfig = pick(config, ["theme"]);
console.log(pickedConfig); // { theme: "dark" }
```

## Notes
- This function is useful for creating subsets of objects while maintaining type safety in TypeScript.
- If a key in the `keys` array does not exist in the source object, it will be ignored.

## Dependencies
None.

## Source Code
::: code-group

```typescript
function pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((picked, key) => {
    if (key in obj) {
      picked[key] = obj[key];
    }

    return picked;
  }, {} as Pick<T, K>);
}
```

```javascript
function pick(obj, keys) {
  return keys.reduce((picked, key) => {
    if (key in obj) {
      picked[key] = obj[key];
    }

    return picked;
  }, {});
}
```
:::

## References
- [Pick Utility Type](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)
- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)