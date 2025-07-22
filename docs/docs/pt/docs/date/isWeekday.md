# isWeekday

A função `isWeekday` verifica se uma data corresponde a um dia útil (segunda a sexta-feira).

## Sintaxe

```typescript
isWeekday(date: Date): boolean;
```

### Parâmetros

| Nome    | Tipo     | Descrição                      |
| ------- | -------- | ------------------------------ |
| `date`  | `Date`   | A data a ser verificada        |

### Retorno

| Tipo       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| `boolean`  | `true` se a data for dia útil, `false` caso contrário            |

## Exemplos

```typescript
isWeekday(new Date("2024-06-10")); // Segunda-feira
// => true

isWeekday(new Date("2024-06-09")); // Domingo
// => false
```

## Notas

* Lança um erro se a data não for válida.
* Útil para validações de calendário e regras de negócio.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date