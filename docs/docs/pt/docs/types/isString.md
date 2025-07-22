# isString

A função `isString` verifica se o valor fornecido é do tipo string.

## Sintaxe

```typescript
isString(value: any): value is string;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for uma string              |

## Exemplos

```typescript
isString("abc"); // => true
isString(123); // => false
```

## Notas

* Útil para validação de valores antes de operações de string.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String