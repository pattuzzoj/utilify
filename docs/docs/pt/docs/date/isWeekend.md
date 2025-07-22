# isWeekend

A função `isWeekend` verifica se uma data corresponde a um final de semana (sábado ou domingo).

## Sintaxe

```typescript
isWeekend(date: Date): boolean;
```

### Parâmetros

| Nome    | Tipo     | Descrição                      |
| ------- | -------- | ------------------------------ |
| `date`  | `Date`   | A data a ser verificada        |

### Retorno

| Tipo       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| `boolean`  | `true` se a data for final de semana, `false` caso contrário     |

## Exemplos

```typescript
isWeekend(new Date("2024-06-08")); // Sábado
// => true

isWeekend(new Date("2024-06-10")); // Segunda-feira
// => false
```

## Notas

* Lança um erro se a data não for válida.
* Útil para validações de calendário e regras de negócio.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date