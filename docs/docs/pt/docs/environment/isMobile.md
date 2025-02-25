# isMobile

A função `isMobile` verifica se o código está sendo executado em um dispositivo móvel com base no agente do usuário (`userAgent`).

## Sintaxe

```typescript
function isMobile(): boolean | undefined;
```

### Retorno

| Tipo         | Descrição                                                       |
|--------------|-----------------------------------------------------------------|
| `boolean`    | Retorna `true` se for detectado um dispositivo móvel, ou `false` caso contrário. |
| `undefined`  | Retorna `undefined` se o código estiver sendo executado no servidor. |

## Exemplos

```typescript
console.log(isMobile()); // true em dispositivos móveis, false em desktops, undefined no servidor
```

## Dependências

- [`isServer`](./isServer.md): Verifica se o código está sendo executado no servidor.

## Código Fonte

::: code-group
```typescript
import isServer from './isServer';

function isMobile(): boolean | undefined {
  if (isServer()) return;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
```

```javascript
import isServer from './isServer';

function isMobile() {
  if (isServer()) return;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
```
:::

## Notas

1. A função retorna `undefined` caso esteja rodando no lado do servidor (Node.js ou outro ambiente sem `navigator`).
2. O regex cobre uma ampla gama de dispositivos móveis comuns.
3. Dependendo do uso, pode ser mais robusto verificar também por dimensões de tela, além de apenas o `userAgent`.

## Referências

- [navigator.userAgent - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Navigator/userAgent)