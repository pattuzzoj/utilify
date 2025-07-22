# isAsyncFunction

A função `isAsyncFunction` verifica se o valor fornecido é uma função assíncrona.

## Sintaxe

```typescript
isAsyncFunction(value: any): value is (...args: any[]) => Promise<any>;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for uma função assíncrona  |

## Exemplos

```typescript
isAsyncFunction(async function() {}); // => true
isAsyncFunction(function() {}); // => false
```

## Notas

* Útil para validação de funções antes de usar await.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function