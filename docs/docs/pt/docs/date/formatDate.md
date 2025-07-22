# formatDate

A função `formatDate` formata uma data de acordo com um padrão de string especificado, como 'dd/MM/yyyy' ou 'yyyy-MM-dd'.

## Sintaxe

```typescript
formatDate(date: Date, pattern?: string): string;
```

### Parâmetros

| Nome      | Tipo      | Descrição                                             |
| --------- | --------- | ---------------------------------------------------- |
| `date`    | `Date`    | A data a ser formatada                               |
| `pattern` | `string`  | (Opcional) Padrão de formatação (ex: 'dd/MM/yyyy')   |

### Retorno

| Tipo      | Descrição                          |
| --------- | ---------------------------------- |
| `string`  | Data formatada conforme o padrão   |

## Exemplos

```typescript
formatDate(new Date("2024-06-10"), 'dd/MM/yyyy');
// => "10/06/2024"

formatDate(new Date("2024-06-10"), 'yyyy-MM-dd');
// => "2024-06-10"
```

## Notas

* Lança um erro se a data não for válida.
* Útil para exibir datas em diferentes formatos regionais.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date