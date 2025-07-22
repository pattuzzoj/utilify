# isRegExp

A função `isRegExp` verifica se o valor fornecido é uma expressão regular (RegExp).

## Sintaxe

```typescript
isRegExp(value: any): value is RegExp;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for uma expressão regular    |

## Exemplos

```typescript
isRegExp(/abc/); // => true
isRegExp("abc"); // => false
```

## Notas

* Útil para validação antes de usar métodos de RegExp.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp