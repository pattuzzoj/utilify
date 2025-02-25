# getLanguage

The `getLanguage` function returns the browser's language code.

## Syntax

```typescript
function getLanguage(): string | undefined;
```

### Return

| Type              | Description                                                     |
|-------------------|---------------------------------------------------------------|
| `string`          | The browser's language code (the first two letters, for example, `'en'` for English, `'pt'` for Portuguese). |
| `undefined`       | If the function is executed on the server, it will return `undefined`. |

## Examples

```typescript
console.log(getLanguage()); // 'en' (if the browser's language is English)
```

## Notes

- If executed on the server, the function will return `undefined`.

## Dependencies

- [`isServer`](../environment/isServer.md): The `isServer` function is used to check if the code is running on the server.

## Source Code

::: code-group
```typescript
import { isServer } from '@utilify/environment';

function getLanguage(): string | undefined {
  if (isServer()) return undefined;

  return navigator.language.slice(0, 2);
}
```

```javascript
function getLanguage() {
  if (isServer()) return undefined;

  return navigator.language.slice(0, 2);
}
```
:::

## References

- [Navigator.language - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language)