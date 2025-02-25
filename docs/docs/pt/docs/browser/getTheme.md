# getTheme

A função `getTheme` retorna a preferência de tema atual do usuário.

## Sintaxe

```typescript
function getTheme(): string | undefined;
```

### Retorno

| Tipo              | Descrição                                                       |
|-------------------|---------------------------------------------------------------|
| `string`          | A preferência de tema do usuário: `'dark'` ou `'light'`.         |
| `undefined`       | Se a função for executada no servidor, retornará `undefined`.    |

## Exemplos

```typescript
console.log(getTheme()); // 'dark' ou 'light' dependendo da preferência do usuário
```

## Notas

- Se executado no servidor, a função retornará `undefined`.

## Dependências

- [`isServer`](../environment/isServer.md): A função `isServer` é usada para verificar se o código está sendo executado no servidor.

## Código Fonte

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

## Referências

- [Window.matchMedia() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)