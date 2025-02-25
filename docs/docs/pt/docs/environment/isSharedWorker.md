# isSharedWorker

A função `isSharedWorker` verifica se o código está sendo executado dentro de um **Shared Worker**, que é um tipo de trabalhador web que pode ser compartilhado entre múltiplas páginas ou abas, permitindo que as páginas se comuniquem entre si.

## Sintaxe

```typescript
function isSharedWorker(): boolean;
```

### Retorno

| Tipo     | Descrição                                                   |
|----------|-------------------------------------------------------------|
| `boolean`| Retorna `true` se o código estiver sendo executado dentro de um **Shared Worker**, caso contrário, retorna `false`. |

## Exemplos

```typescript
console.log(isSharedWorker()); // true se dentro de um Shared Worker, false caso contrário
```

## Notas

- Um **Shared Worker** é diferente de um **Dedicated Worker**, pois ele pode ser compartilhado por várias páginas, abas ou até mesmo janelas do navegador.
- A função verifica a presença de `SharedWorkerGlobalScope` e o contexto de `self` para determinar se o código está sendo executado em um ambiente de Shared Worker.

## Código Fonte

::: code-group
```typescript
function isSharedWorker(): boolean {
  return typeof SharedWorkerGlobalScope !== 'undefined' && self instanceof SharedWorkerGlobalScope;
}
```

```javascript
function isSharedWorker() {
  return typeof SharedWorkerGlobalScope !== 'undefined' && self instanceof SharedWorkerGlobalScope;
}
```
:::

## Referências

- [Shared Worker - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/SharedWorkerGlobalScope)