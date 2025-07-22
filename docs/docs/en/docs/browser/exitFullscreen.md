# exitFullscreen

The `exitFullscreen` function requests the browser to exit fullscreen mode, if supported.

## Syntax

```typescript
exitFullscreen(): void;
```

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | –    | This function does not take any parameters |

### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | `void` | Does not return a value |

## Examples

```typescript
exitFullscreen();
// Exits fullscreen mode if active
```

## Notes

* May not work in all browsers or contexts.
* Useful for interfaces that toggle between fullscreen and normal mode.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen