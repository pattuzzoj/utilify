# getLanguage

The `getLanguage` function returns the user's preferred browser language.

## Syntax

```typescript
getLanguage(): string;
```

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | –    | This function does not take any parameters |

### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | `string` | Preferred language code (e.g., "en-US") |

## Examples

```typescript
getLanguage();
// => "en-US"
```

## Notes

* Useful for internationalization and content adaptation.
* May return only the primary language code (e.g., "en").

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language