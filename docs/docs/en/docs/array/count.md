# count

The `count` function returns the number of elements in an array or characters in a string.

## Syntax

```typescript
count(array: any[] | string): number;
```

### Parameters

| Name     | Type               | Description                    |
|----------|--------------------|--------------------------------|
| `array`  | `any[]` \| `string` | Source array or string         |

### Returns

| Type      | Description                               |
|----------|--------------------------------------------|
| `number` | Number of elements or characters           |

## Examples

```typescript
count([1, 2, 3]); // => 3
count("abc"); // => 3
count([]); // => 0
```

## Notes

* Returns 0 for empty arrays or strings.
* Useful for size validation.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length