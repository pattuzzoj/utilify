# isWebWorker

A função `isWebWorker` verifica se o ambiente atual é qualquer tipo de web worker (Dedicated, Shared ou Service Worker). Os web workers são executados em segundo plano e permitem a execução de múltiplas threads em JavaScript, possibilitando que a thread principal descarregue tarefas sem bloquear a interface do usuário.

## Sintaxe

```typescript
function isWebWorker(): boolean;
```

### Retorno

| Tipo     | Descrição                                                   |
|----------|-------------------------------------------------------------|
| `boolean`| Retorna `true` se o ambiente for um Dedicated, Shared ou Service Worker, caso contrário retorna `false`. |

## Exemplos

```typescript
console.log(isWebWorker()); // true se estiver dentro de qualquer Web Worker, false caso contrário
```

## Notas

- A função combina verificações para os ambientes **Dedicated Worker**, **Shared Worker** e **Service Worker**. Se o código estiver sendo executado em qualquer um desses tipos de worker, a função retornará `true`.
- Um **Web Worker** se refere a qualquer um dos tipos de worker utilizados para executar código em uma thread separada.

## Dependências

- [`isDedicatedWorker`](./isDedicatedWorker.md): Usada para verificar se o ambiente é um Dedicated Worker.
- [`isSharedWorker`](./isSharedWorker.md): Usada para verificar se o ambiente é um Shared Worker.
- [`isServiceWorker`](./isServiceWorker.md): Usada para verificar se o ambiente é um Service Worker.

## Código Fonte

::: code-group
```typescript
import isDedicatedWorker from "./isDedicatedWorker";
import isSharedWorker from "./isSharedWorker";
import isServiceWorker from "./isServiceWorker";

function isWebWorker(): boolean {
  return isDedicatedWorker() || isSharedWorker() || isServiceWorker();
}
```

```javascript
import isDedicatedWorker from "./isDedicatedWorker";
import isSharedWorker from "./isSharedWorker";
import isServiceWorker from "./isServiceWorker";

function isWebWorker() {
  return isDedicatedWorker() || isSharedWorker() || isServiceWorker();
}
```
:::

## Referências

- [Web Workers - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Workers_API)