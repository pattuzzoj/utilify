# onVisibilityChange

The `onVisibilityChange` function adds a listener for changes in the browser tab's visibility.

## Syntax

```typescript
onVisibilityChange(listener: () => void): void;
```

### Parameters

| Name     | Type     | Description                              |
| -------- | -------- | ---------------------------------------- |
| `listener` | `() => void` | Function called when visibility changes  |

### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | `void` | Does not return a value |

## Examples

```typescript
onVisibilityChange(() => {
  if (document.visibilityState === "hidden") {
    console.log("The tab became hidden");
  }
});
```

## Notes

* Useful for pausing or resuming tasks based on tab visibility.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API