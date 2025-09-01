# isNode

The `isNode` function checks if the code is running in a Node.js environment.

## Syntax

```typescript
isNode(): boolean;
```

### Parameters

This function does not take any parameters.

### Returns

| Type       | Description                                               |
| ---------- | --------------------------------------------------------- |
| `boolean`  | `true` if running in a Node.js environment, `false` otherwise |

## Examples

```typescript
isNode();
// => true (in Node.js)
// => false (in other environments)
```

## Notes

* Checks for the existence of the global `global` and `process` objects.
* Useful for conditioning Node.js-specific executions.

## References

* https://nodejs.org/api/process.html