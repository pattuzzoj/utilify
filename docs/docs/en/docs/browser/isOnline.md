# isOnline

The `isOnline` function checks if the browser is currently connected to the internet.

## Syntax

```typescript
isOnline(): boolean;
```

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | –    | This function does not take any parameters |

### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | `boolean` | `true` if online |

## Examples

```typescript
isOnline();
// => true
```

## Notes

* Useful for adapting features based on connectivity.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine