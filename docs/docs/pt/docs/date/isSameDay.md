# isSameDay

A função `isSameDay` verifica se duas datas representam o mesmo dia (ano, mês e dia).

## Sintaxe

```typescript
isSameDay(date1: Date, date2: Date): boolean;
```

### Parâmetros

| Nome     | Tipo     | Descrição                        |
| -------- | -------- | -------------------------------- |
| `date1`  | `Date`   | Primeira data a ser comparada    |
| `date2`  | `Date`   | Segunda data a ser comparada     |

### Retorno

| Tipo       | Descrição                                 |
| ---------- | ----------------------------------------- |
| `boolean`  | Verdadeiro se as datas forem do mesmo dia  |

## Exemplos

```typescript
isSameDay(new Date("2024-06-10T10:00:00"), new Date("2024-06-10T23:59:59"));
// => true

isSameDay(new Date("2024-06-10"), new Date("2024-06-11"));
// => false
```

## Notas

* Lança um erro se alguma das datas não for válida.
* Útil para comparar datas ignorando o horário.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date