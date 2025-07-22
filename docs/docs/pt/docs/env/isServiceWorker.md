# isServiceWorker

A função `isServiceWorker` verifica se o código está sendo executado em um Service Worker.

## Sintaxe

```typescript
isServiceWorker(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| `boolean`  | `true` se estiver em um Service Worker, `false` caso contrário   |

## Exemplos

```typescript
isServiceWorker();
// => true (em Service Worker)
// => false (em outros ambientes)
```

## Notas

* Verifica a existência do objeto global `ServiceWorkerGlobalScope` e se `self` é uma instância desse escopo.
* Útil para condicionar execuções específicas de Service Worker.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/ServiceWorkerGlobalScope
