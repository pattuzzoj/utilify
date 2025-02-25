# isServer

A função `isServer` verifica se o código está sendo executado em um ambiente de servidor, seja Node.js, Deno, Bun, ou qualquer outro ambiente onde o objeto `window` não esteja presente (como servidores).

## Sintaxe

```typescript
function isServer(): boolean;
```

### Retorno

| Tipo      | Descrição                                              |
|-----------|--------------------------------------------------------|
| `boolean` | Retorna `true` se o código estiver sendo executado no servidor; caso contrário, `false`. |

## Exemplos

```typescript
console.log(isServer()); // true se executado no servidor, false caso contrário
```

## Notas

- A função utiliza as funções `isNode`, `isDeno`, `isBun` para verificar os ambientes Node.js, Deno e Bun, respectivamente.
- Também verifica se o objeto `window` não está definido, o que indica que o código não está rodando em um navegador.

## Código Fonte

::: code-group
```typescript
import isBun from "./isBun";
import isDeno from "./isDeno";
import isNode from "./isNode";

function isServer(): boolean {
  return isNode() || isDeno() || isBun() || typeof window === "undefined";
}
```

```javascript
import isBun from "./isBun";
import isDeno from "./isDeno";
import isNode from "./isNode";

function isServer() {
  return isNode() || isDeno() || isBun() || typeof window === "undefined";
}
```
:::

## Referências

- [Global Object `window`](https://developer.mozilla.org/en-US/docs/Web/API/Window)