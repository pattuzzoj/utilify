# share

The `share` function uses the browser's native sharing API to share data such as title, text, URL, or files.

## Syntax

```typescript
share(data: ShareData): Promise<void>;
```

### Parameters

| Name | Type      | Description                                 |
| ---- | --------- | ------------------------------------------- |
| `data` | `ShareData` | Data to be shared (title, text, url, files) |

### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | `Promise<void>` | Promise resolved after sharing |

## Examples

```typescript
share({
  title: "Title",
  text: "Check out this link!",
  url: "https://example.com"
});
```

## Notes

* Available only in browsers that support the Web Share API.
* May throw an error if sharing is canceled or not supported.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share