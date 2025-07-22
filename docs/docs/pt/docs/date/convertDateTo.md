# convertDateTo

A função `convertDateTo` converte uma data para um tipo de saída específico: string, número ou objeto Date.

## Sintaxe

```typescript
convertDateTo<T extends 'string' | 'number' | 'date'>(date: Date, type: T): string | number | Date;
```

### Parâmetros

| Nome    | Tipo      | Descrição                                         |
| ------- | --------- | --------------------------------------------------- |
| `date`  | `Date`    | A data a ser convertida                             |
| `type`  | `string`  | O tipo de saída desejado: 'string', 'number' ou 'date' |

### Retorno

| Tipo                       | Descrição                                 |
| -------------------------- | ----------------------------------------- |
| `string` \| `number` \| `Date` | Valor convertido conforme o tipo solicitado |

## Exemplos

```typescript
convertDateTo(new Date("2024-06-10T12:00:00Z"), 'string');
// => "2024-06-10T12:00:00.000Z"

convertDateTo(new Date("2024-06-10T12:00:00Z"), 'number');
// => 1718020800000

convertDateTo(new Date("2024-06-10T12:00:00Z"), 'date');
// => Date Mon Jun 10 2024 12:00:00 GMT+0000
```

## Notas

* Lança um erro se a data não for válida ou se o tipo for inválido.
* Útil para padronizar a saída de datas em diferentes contextos.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date