# onOffline

The `onOffline` function adds a listener for the browser's offline event.

## Syntax

```typescript
onOffline(listener: () => void): void;
```

### Parameters

| Name     | Type     | Description                              |
| -------- | -------- | ---------------------------------------- |
| `listener` | `() => void` | Function called when going offline       |

### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | `void` | Does not return a value |

## Examples

```typescript
onOffline(() => {
  alert("You are offline!");
});
```

## Notes

* Useful for detecting loss of connection and adapting the interface.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine