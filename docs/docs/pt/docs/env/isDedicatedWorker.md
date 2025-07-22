# isDedicatedWorker

A função `isDedicatedWorker` verifica se o código está sendo executado em um Dedicated Worker.

## Sintaxe

```typescript
isDedicatedWorker(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| `boolean`  | `true` se estiver em um Dedicated Worker, `false` caso contrário |

## Exemplos

```typescript
isDedicatedWorker();
// => true (em Dedicated Worker)
// => false (em outros ambientes)
```

## Notas

* Verifica a existência do objeto global `DedicatedWorkerGlobalScope` e se `self` é uma instância desse escopo.
* Útil para condicionar execuções específicas de Dedicated Worker.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/DedicatedWorkerGlobalScope
