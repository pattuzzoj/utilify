# isCookieEnabled

A função `isCookieEnabled` verifica se os cookies estão habilitados no navegador.

## Sintaxe

```typescript
function isCookieEnabled(): boolean | undefined;
```

### Retorno

| Tipo              | Descrição                                                      |
|-------------------|----------------------------------------------------------------|
| `boolean`         | `true` se os cookies estão habilitados, `false` caso contrário. |
| `undefined`       | Se a função for executada no servidor, retornará `undefined`.   |

## Exemplos

```typescript
console.log(isCookieEnabled()); // true ou false
```

## Notas

- Se executado no servidor, a função retornará `undefined`.

## Dependências

- [`isServer`](../environment/isServer.md): A função `isServer` é usada para verificar se o código está sendo executado no servidor.

## Código Fonte

::: code-group
```typescript
import { isServer } from '@utilify/environment';

function isCookieEnabled(): boolean | undefined {
  if (isServer()) return undefined;

  return navigator.cookieEnabled;
}
```

```javascript
function isCookieEnabled() {
  if (isServer()) return undefined;

  return navigator.cookieEnabled;
}
```
:::

## Referências

- [Navigator.cookieEnabled - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled)