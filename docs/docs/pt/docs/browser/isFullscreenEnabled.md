# isFullscreenEnabled

A função `isFullscreenEnabled` verifica se o modo de tela cheia está habilitado.

## Assinatura

```typescript
function isFullscreenEnabled(): boolean | undefined;
```

### Retorno

| Tipo              | Descrição                                                        |
|-------------------|------------------------------------------------------------------|
| `boolean`         | `true` se o modo de tela cheia estiver habilitado, `false` caso contrário. |
| `undefined`       | Se executado no servidor, a função retornará `undefined`.        |

## Exemplos

```typescript
console.log(isFullscreenEnabled()); // true ou false
```

## Notas

- Se executado no servidor, a função retornará `undefined`.

## Dependências

- [`isServer`](../environment/isServer.md): A função `isServer` é usada para verificar se o código está sendo executado no servidor.

## Código Fonte

::: code-group
```typescript
import { isServer } from '@utilify/environment';

function isFullscreenEnabled(): boolean | undefined {
  if (isServer()) return;

  return document.fullscreenEnabled;
}
```

```javascript
function isFullscreenEnabled() {
  if (isServer()) return;

  return document.fullscreenEnabled;
}
```
:::

## Referências

- [Document.fullscreenEnabled - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenEnabled)