# isDedicatedWorker

A função `isDedicatedWorker` verifica se o código está sendo executado dentro de um **Dedicated Worker**, ou seja, em um ambiente de execução de worker dedicado no JavaScript.

## Sintaxe

```typescript
function isDedicatedWorker(): boolean;
```

### Retorno

| Tipo     | Descrição                                                   |
|----------|-------------------------------------------------------------|
| `boolean`| Retorna `true` se o código estiver sendo executado dentro de um **Dedicated Worker**, caso contrário retorna `false`. |

## Exemplos

```typescript
console.log(isDedicatedWorker()); // true se estiver dentro de um Dedicated Worker, false caso contrário
```

## Notas

- Um **Dedicated Worker** é um tipo de Web Worker que executa tarefas em segundo plano sem bloquear o thread principal.
- A função verifica a presença do tipo `DedicatedWorkerGlobalScope` e o contexto de `self` para determinar se o código está rodando em um ambiente de worker dedicado.

## Código Fonte

::: code-group
```typescript
function isDedicatedWorker(): boolean {
  return typeof DedicatedWorkerGlobalScope !== 'undefined' && self instanceof DedicatedWorkerGlobalScope;
}
```

```javascript
function isDedicatedWorker() {
  return typeof DedicatedWorkerGlobalScope !== 'undefined' && self instanceof DedicatedWorkerGlobalScope;
}
```
:::

## Referências

- [Dedicated Worker - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/DedicatedWorkerGlobalScope)