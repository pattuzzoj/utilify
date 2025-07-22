# isMobile

The `isMobile` function checks if the code is running on a mobile device.

## Syntax

```typescript
isMobile(): boolean;
```

### Parameters

This function does not take any parameters.

### Returns

| Type       | Description                                         |
| ---------- | --------------------------------------------------- |
| `boolean`  | `true` if running on a mobile device, `false` otherwise |

## Examples

```typescript
isMobile();
// => true (on mobile devices)
// => false (on desktop)
```

## Notes

* Uses the `navigator.userAgent` property to identify mobile devices.
* Useful for conditioning mobile-specific executions.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent