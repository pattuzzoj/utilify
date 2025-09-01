# adjustDate

A função `adjustDate` ajusta uma data adicionando ou subtraindo anos, meses, dias, horas, minutos, segundos ou milissegundos.

## Sintaxe

```typescript
adjustDate(
  date: Date,
  adjustment: Partial<{
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
  }>
): Date;
```

### Parâmetros

| Nome         | Tipo                                                                 | Descrição                                                        |
| ------------ | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `date`       | `Date`                                                               | A data a ser ajustada                                            |
| `adjustment` | `Partial<{ years: number; months: number; days: number; hours: number; minutes: number; seconds: number; milliseconds: number; }>` | Objeto com os campos a serem ajustados (anos, meses, dias, etc.) |

### Retorno

| Tipo    | Descrição                          |
| ------- | ---------------------------------- |
| `Date`  | Instância de `Date` ajustada       |

## Exemplos

```typescript
adjustDate(new Date("2024-06-10"), { days: 5 });
// => Date Sat Jun 15 2024

adjustDate(new Date("2024-06-10"), { months: -1 });
// => Date Fri May 10 2024
```

## Notas

* Lança um erro se a data não for válida.
* Útil para manipulação flexível de datas.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date