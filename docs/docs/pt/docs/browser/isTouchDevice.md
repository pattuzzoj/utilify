# isTouchDevice

A função `isTouchDevice` verifica se o dispositivo suporta eventos de toque.

## Assinatura

```typescript
function isTouchDevice(): boolean | undefined;
```

### Retorno

| Tipo              | Descrição                                                       |
|-------------------|---------------------------------------------------------------|
| `boolean`         | `true` se o dispositivo suportar eventos de toque, `false` caso contrário. |
| `undefined`       | Se executado no servidor, a função retornará `undefined`.      |

## Exemplos

```typescript
console.log(isTouchDevice()); // true ou false
```

## Notas

- Se executado no servidor, a função retornará `undefined`.

## Dependências

- [`isServer`](../environment/isServer.md): A função `isServer` é usada para verificar se o código está sendo executado no servidor.

## Código Fonte

::: code-group
```typescript
import { isServer } from '@utilify/environment';

function isTouchDevice(): boolean | undefined {
  if (isServer()) return;

  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
```

```javascript
function isTouchDevice() {
  if (isServer()) return;

  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
```
:::

## Referências

- [Touch events - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)