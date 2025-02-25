# isServiceWorker

A função `isServiceWorker` verifica se o código está sendo executado dentro de um **Service Worker**, que é um tipo de trabalhador web utilizado para tarefas em segundo plano, como cache, notificações e funcionalidade offline.

## Sintaxe

```typescript
function isServiceWorker(): boolean;
```

### Retorno

| Tipo     | Descrição                                                   |
|----------|-------------------------------------------------------------|
| `boolean`| Retorna `true` se o código estiver sendo executado dentro de um **Service Worker**, caso contrário, retorna `false`. |

## Exemplos

```typescript
console.log(isServiceWorker()); // true se dentro de um Service Worker, false caso contrário
```

## Notas

- Um **Service Worker** é um tipo especial de trabalhador web que opera separadamente da página da web e permite que você lide com solicitações de rede, faça cache de recursos e crie tarefas em segundo plano.
- A função verifica a presença de `ServiceWorkerGlobalScope` e o contexto de `self` para determinar se o código está sendo executado em um ambiente de service worker.

## Código Fonte

::: code-group
```typescript
function isServiceWorker(): boolean {
  return typeof ServiceWorkerGlobalScope !== 'undefined' && self instanceof ServiceWorkerGlobalScope;
}
```

```javascript
function isServiceWorker() {
  return typeof ServiceWorkerGlobalScope !== 'undefined' && self instanceof ServiceWorkerGlobalScope;
}
```
:::

## Referências

- [Service Worker - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/ServiceWorkerGlobalScope)