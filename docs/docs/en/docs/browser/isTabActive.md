# isTabActive

The `isTabActive` function checks if the browser tab is active (visible to the user).

## Syntax

```typescript
isTabActive(): boolean;
```

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | –    | This function does not take any parameters |

### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | `boolean` | `true` if the tab is visible |

## Examples

```typescript
isTabActive();
// => true
```

## Notes

* Useful for pausing or resuming tasks based on tab visibility.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API