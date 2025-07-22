# isLeapYear

A função `isLeapYear` verifica se um ano ou uma data corresponde a um ano bissexto.

## Sintaxe

```typescript
isLeapYear(yearOrDate: number | Date): boolean;
```

### Parâmetros

| Nome         | Tipo                | Descrição                                 |
| ------------ | ------------------- | ----------------------------------------- |
| `yearOrDate` | `number` \| `Date`  | O ano (ex: 2024) ou uma instância de Date |

### Retorno

| Tipo       | Descrição                          |
| ---------- | ---------------------------------- |
| `boolean`  | Verdadeiro se for ano bissexto     |

## Exemplos

```typescript
isLeapYear(2024);
// => true

isLeapYear(new Date("2020-01-01"));
// => true

isLeapYear(2023);
// => false
```

## Notas

* Lança um erro se o parâmetro não for um número ou uma data válida.
* Útil para cálculos de datas e validação de anos bissextos.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date