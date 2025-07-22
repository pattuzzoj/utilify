# formatTime

A função `formatTime` formata um horário (Date) para uma string no formato especificado, como 'HH:mm:ss' ou 'HH:mm'.

## Sintaxe

```typescript
formatTime(date: Date, pattern?: string): string;
```

### Parâmetros

| Nome      | Tipo      | Descrição                                             |
| --------- | --------- | ---------------------------------------------------- |
| `date`    | `Date`    | A data/hora a ser formatada                          |
| `pattern` | `string`  | (Opcional) Padrão de formatação (ex: 'HH:mm:ss')     |

### Retorno

| Tipo      | Descrição                              |
| --------- | --------------------------------------- |
| `string`  | Horário formatado conforme o padrão     |

## Exemplos

```typescript
formatTime(new Date("2024-06-10T14:05:09"), 'HH:mm:ss');
// => "14:05:09"

formatTime(new Date("2024-06-10T14:05:09"), 'HH:mm');
// => "14:05"
```

## Notas

* Lança um erro se a data não for válida.
* Útil para exibir apenas o horário de uma data.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date