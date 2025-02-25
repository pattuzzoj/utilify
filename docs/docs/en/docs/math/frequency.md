# frequency

The `frequency` function calculates the frequency of each value in an array, returning an object where the keys are the array values (converted to strings), and the values are the counts of how many times each value appears.

## Syntax

```typescript
function frequency<T>(arr: T[]): Record<string, number>
```

### Parameters

| Name  | Type          | Description                                           |
|-------|---------------|-----------------------------------------------------|
| arr   | `T[]`         | The array whose values will have their frequencies counted. |

### Returns

| Type                           | Description                                                     |
|---------------------------------|---------------------------------------------------------------|
| `Record<string, number>`        | An object where the keys are the array values (converted to string) and the values are the counts of occurrences of those values in the array. |

## Examples

```typescript
console.log(frequency([1, 2, 2, 3, 3, 3, 4])); 
// Output: { '1': 1, '2': 2, '3': 3, '4': 1 }

console.log(frequency(['apple', 'banana', 'apple', 'orange', 'banana'])); 
// Output: { 'apple': 2, 'banana': 2, 'orange': 1 }
```

## Notes

- The function uses the `reduce` method to iterate over the array and build the frequency object.
- The key for each value in the final object is a string, as the function converts the items to strings using `String(item)`.

## Source Code

::: code-group
```typescript
function frequency<T>(arr: T[]): Record<string, number> {
  return arr.reduce((acc, item) => {
    acc[String(item)] = (acc[String(item)] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}
```

```javascript
function frequency(arr) {
  return arr.reduce((acc, item) => {
    acc[String(item)] = (acc[String(item)] || 0) + 1;
    return acc;
  }, {});
}
```
::: 

## References

- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)  
- [Record Type](https://www.typescriptlang.org/docs/handbook/2/objects.html#record)  