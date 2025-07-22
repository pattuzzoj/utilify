# adjustTimezone

A função `adjustTimezone` ajusta uma data para um fuso horário alvo, retornando uma nova instância de `Date`.

## Sintaxe

```typescript
adjustTimezone(date: Date, targetTimezone: number): Date;
```

### Parâmetros

| Nome             | Tipo        | Descrição                                              |
| ---------------- | ----------- | ----------------------------------------------------- |
| `date`           | `Date`      | A data a ser ajustada                                 |
| `targetTimezone` | `number`    | O fuso horário alvo (em horas, ex: -3 para GMT-3)     |

### Retorno

| Tipo    | Descrição                                         |
| ------- | ------------------------------------------------- |
| `Date`  | Instância de `Date` ajustada para o fuso horário   |

## Exemplos

```typescript
adjustTimezone(new Date("2024-06-10T12:00:00Z"), -3);
// => Date Mon Jun 10 2024 09:00:00 GMT-0300
```

## Notas

* Lança um erro se a data não for válida.
* Útil para converter datas entre diferentes fusos horários.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
