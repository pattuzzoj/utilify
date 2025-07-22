# isSharedWorker

A função `isSharedWorker` verifica se o código está sendo executado em um Shared Worker.

## Sintaxe

```typescript
isSharedWorker(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| `boolean`  | `true` se estiver em um Shared Worker, `false` caso contrário    |

## Exemplos

```typescript
isSharedWorker();
// => true (em Shared Worker)
// => false (em outros ambientes)
```

## Notas

* Verifica a existência do objeto global `SharedWorkerGlobalScope` e se `self` é uma instância desse escopo.
* Útil para condicionar execuções específicas de Shared Worker.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/SharedWorkerGlobalScope