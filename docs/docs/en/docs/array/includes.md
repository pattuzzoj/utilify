# includes

The `includes` function checks if an array or string contains a given value.

## Syntax

```typescript
includes<T>(array: T[] | string, value: T | string, fromIndex?: number): boolean;
```

### Parameters

| Name      | Type               | Description                                 |
|-----------|--------------------|---------------------------------------------|
| `array`   | `T[]` \| `string`   | Source array or string                      |
| `value`   | `T` \| `string`     | Value to search for                         |
| `fromIndex` | `number`         | Starting index for search (optional)        |

### Returns

| Type      | Description                                 |
|-----------|---------------------------------------------|
| `boolean` | Returns true if the value is found          |

## Examples

```typescript
includes([1, 2, 3], 2); // => true
includes("abc", "b"); // => true
includes([1, 2, 3], 4); // => false
```

## Notes

* Equivalent to the native Array.prototype.includes method.
* Useful for quick searches in arrays or strings.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes