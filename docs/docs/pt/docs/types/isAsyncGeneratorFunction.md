# isAsyncGeneratorFunction

A função `isAsyncGeneratorFunction` verifica se o valor fornecido é uma função geradora assíncrona.

## Sintaxe

```typescript
isAsyncGeneratorFunction(value: any): value is AsyncGeneratorFunction;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                         |
|-----------|---------------------------------------------------|
| `boolean` | Verdadeiro se for uma função geradora assíncrona  |

## Exemplos

```typescript
isAsyncGeneratorFunction(async function* () {}); // => true
isAsyncGeneratorFunction(function* () {}); // => false
```

## Notas

* Útil para validação de funções antes de usar for-await-of.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function*