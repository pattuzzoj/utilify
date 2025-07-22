# isArray

A função `isArray` verifica se o valor fornecido é um array.

## Sintaxe

```typescript
isArray(value: any): value is any[];
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for um array                |

## Exemplos

```typescript
isArray([]); // => true
isArray({}); // => false
```

## Notas

* Útil para validação de tipos antes de operações em arrays.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray