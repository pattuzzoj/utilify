# omit
The `omit` function creates a new object excluding the specified keys from the original object.

## Syntax

```typescript
omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>
```

### Parameters

| Parameter | Type                        | Description                                                   |
|-----------|-----------------------------|-------------------------------------------------------------|
| `obj`     | `T`                         | The source object from which properties will be removed. |
| `keys`    | `K[]`                       | An array of keys to be excluded from the resulting object. |

### Return

| Type        | Description                                                       |
|-------------|-----------------------------------------------------------------|
| `Omit<T, K>` | A new object containing all properties from `obj`, except the keys specified in `keys`. |

## Examples

### Example 1
```typescript
const user = { id: 1, name: "Alice", age: 25, isAdmin: true };
const omitted = omit(user, ["age", "isAdmin"]);
console.log(omitted); // { id: 1, name: "Alice" }
```

### Example 2
```typescript
const config = { debug: true, theme: "dark", language: "en" };
const omittedConfig = omit(config, ["debug"]);
console.log(omittedConfig); // { theme: "dark", language: "en" }
```

## Notes
- This function is useful when you want to create a new object with a subset of properties, excluding the ones you don't need.
- If a key in the `keys` array does not exist in the source object, it will be ignored.

## Dependencies
None.

## Source Code
::: code-group

```typescript
function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  return (Object.keys(obj) as K[]).reduce((result, key) => {
    if (!keys.includes(key)) {
      (result as T)[key] = obj[key];
    }
    
    return result;
  }, {} as Omit<T, K>);
}
```

```javascript
function omit(obj, keys) {
  return (Object.keys(obj)).reduce((result, key) => {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
    
    return result;
  }, {});
}
```
:::

## References
- [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)