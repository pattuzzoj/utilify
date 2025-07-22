# isWebWorker

A função `isWebWorker` verifica se o código está sendo executado em qualquer tipo de Web Worker (Dedicated, Shared ou Service Worker).

## Sintaxe

```typescript
isWebWorker(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| `boolean`  | `true` se estiver em um Web Worker, `false` caso contrário       |

## Exemplos

```typescript
isWebWorker();
// => true (em Dedicated, Shared ou Service Worker)
// => false (em outros ambientes)
```

## Notas

* Utiliza as funções `isDedicatedWorker`, `isSharedWorker` e `isServiceWorker` para identificar o ambiente.
* Útil para condicionar execuções específicas de Web Worker.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Workers_API