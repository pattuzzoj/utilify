# isPromise

A função `isPromise` verifica se o valor fornecido é uma Promise.

## Sintaxe

```typescript
isPromise<T = any>(value: any): value is Promise<T>;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for uma Promise              |

## Exemplos

```typescript
isPromise(Promise.resolve(123)); // => true
isPromise(123); // => false
```

## Notas

* Útil para validação antes de usar then/catch/finally.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise