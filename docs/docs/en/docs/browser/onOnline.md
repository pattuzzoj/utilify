# onOnline

The `onOnline` function adds a listener for the browser's online event.

## Syntax

```typescript
onOnline(listener: () => void): void;
```

### Parameters

| Name     | Type     | Description                              |
| -------- | -------- | ---------------------------------------- |
| `listener` | `() => void` | Function called when coming back online  |

### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | `void` | Does not return a value |

## Examples

```typescript
onOnline(() => {
  alert("You are back online!");
});
```

## Notes

* Useful for detecting reconnection and adapting the interface.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine