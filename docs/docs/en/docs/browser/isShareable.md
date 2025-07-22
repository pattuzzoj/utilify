# isShareable

The `isShareable` function checks if the native sharing API is available in the browser.

## Syntax

```typescript
isShareable(): boolean;
```

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | –    | This function does not take any parameters |

### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | `boolean` | `true` if the sharing API is available |

## Examples

```typescript
isShareable();
// => true
```

## Notes

* Useful for enabling features that depend on sharing capabilities.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share