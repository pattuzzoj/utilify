# stripTime

A função `stripTime` remove as informações de horário de uma data, retornando a data apenas com ano, mês e dia.

## Sintaxe

```typescript
stripTime(date: Date): Date;
```

### Parâmetros

| Nome    | Tipo     | Descrição                  |
| ------- | -------- | -------------------------- |
| `date`  | `Date`   | Data a ser processada      |

### Retorno

| Tipo    | Descrição                                 |
| ------- | ----------------------------------------- |
| `Date`  | Data sem a parte de tempo                 |

## Exemplos

```typescript
stripTime(new Date("2024-06-10T15:30:00"));
// => Date Mon Jun 10 2024 00:00:00
```

## Notas

* Lança um erro se a data não for válida.
* Útil para comparações de datas sem considerar o horário.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date