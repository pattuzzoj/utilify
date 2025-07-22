# isNumber

A função `isNumber` verifica se o valor fornecido é do tipo number.

## Sintaxe

```typescript
isNumber(value: any): value is number;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for um número               |

## Exemplos

```typescript
isNumber(123); // => true
isNumber("123"); // => false
```

## Notas

* Útil para validação de valores numéricos antes de operações matemáticas.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number