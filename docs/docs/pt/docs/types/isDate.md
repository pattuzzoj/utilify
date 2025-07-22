# isDate

A função `isDate` verifica se o valor fornecido é uma instância de Date.

## Sintaxe

```typescript
isDate(value: any): value is Date;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for uma instância de Date   |

## Exemplos

```typescript
isDate(new Date()); // => true
isDate("2024-01-01"); // => false
```

## Notas

* Útil para validação de datas antes de operações com objetos Date.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date