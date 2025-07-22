# isFullscreenEnabled

The `isFullscreenEnabled` function checks if the fullscreen API is available in the user's browser.

## Syntax

```typescript
isFullscreenEnabled(): boolean;
```

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | –    | This function does not take any parameters |

### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | `boolean` | `true` if the fullscreen API is available |

## Examples

```typescript
isFullscreenEnabled();
// => true
```

## Notes

* Useful for checking if it is possible to switch to fullscreen mode.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenEnabled