# getTheme

The `getTheme` function returns the user's current theme preference.

## Syntax

```typescript
function getTheme(): string | undefined;
```

### Return

| Type              | Description                                                     |
|-------------------|---------------------------------------------------------------|
| `string`          | The user's theme preference: `'dark'` or `'light'`.            |
| `undefined`       | If the function is executed on the server, it will return `undefined`. |

## Examples

```typescript
console.log(getTheme()); // 'dark' or 'light' depending on the user's preference
```

## Notes

- If executed on the server, the function will return `undefined`.

## Dependencies

- [`isServer`](../environment/isServer.md): The `isServer` function is used to check if the code is running on the server.

## Source Code

::: code-group
```typescript
import { isServer } from '@utilify/environment';

function getTheme(): string | undefined {
  if (isServer()) return undefined;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}
```

```javascript
function getTheme() {
  if (isServer()) return undefined;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}
```
:::

## References

- [Window.matchMedia() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)