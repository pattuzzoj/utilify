# isIterable

The `isIterable` function checks if a value is iterable (has the `Symbol.iterator` method).

## Syntax

```typescript
isIterable(value: any): value is Iterable<any>;
```

### Parameters

| Name     | Type    | Description              |
|----------|---------|--------------------------|
| `value`  | `any`   | Value to be checked      |

### Returns

| Type      | Description                              |
|-----------|------------------------------------------|
| `boolean` | Returns true if the value is iterable     |

## Examples

```typescript
isIterable([1, 2, 3]); // => true
isIterable('abc'); // => true
isIterable(123); // => false
isIterable({}); // => false
```

## Notes

* Iterables include arrays, strings, Maps, Sets, etc.
* Useful for validation before using `for...of` loops.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols