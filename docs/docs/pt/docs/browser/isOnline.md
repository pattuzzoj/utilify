# isOnline

A função `isOnline` verifica se o navegador está online.

## Assinatura

```typescript
function isOnline(): boolean | undefined;
```

### Retorno

| Tipo              | Descrição                                                       |
|-------------------|---------------------------------------------------------------|
| `boolean`         | `true` se o navegador estiver online, `false` caso contrário.  |
| `undefined`       | Se executado no servidor, a função retornará `undefined`.      |

## Exemplos

```typescript
console.log(isOnline()); // true ou false
```

## Notas

- Se executado no servidor, a função retornará `undefined`.

## Dependências

- [`isServer`](../environment/isServer.md): A função `isServer` é usada para verificar se o código está sendo executado no servidor.

## Código Fonte

::: code-group
```typescript
import { isServer } from '@utilify/environment';

function isOnline(): boolean | undefined {
  if (isServer()) return;

  return navigator.onLine;
}
```

```javascript
function isOnline() {
  if (isServer()) return;

  return navigator.onLine;
}
```
:::

## Referências

- [Navigator.onLine - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine)