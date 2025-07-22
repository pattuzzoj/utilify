# isCookieEnabled

The `isCookieEnabled` function checks if cookies are enabled in the user's browser.

## Syntax

```typescript
isCookieEnabled(): boolean;
```

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | –    | This function does not take any parameters |

### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | `boolean` | `true` if cookies are enabled |

## Examples

```typescript
isCookieEnabled();
// => true
```

## Notes

* Useful for checking if it is possible to store data via cookies.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/navigator/cookieEnabled