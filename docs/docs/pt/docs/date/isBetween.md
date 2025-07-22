# isBetween

A função `isBetween` verifica se uma data está entre duas outras datas (inclusivo ou exclusivo).

## Sintaxe

```typescript
isBetween(date: Date, start: Date, end: Date, inclusive?: boolean): boolean;
```

### Parâmetros

| Nome         | Tipo       | Descrição                                                        |
| ------------ | ---------- | --------------------------------------------------------------- |
| `date`       | `Date`     | Data a ser verificada                                            |
| `start`      | `Date`     | Data inicial do intervalo                                        |
| `end`        | `Date`     | Data final do intervalo                                          |
| `inclusive`  | `boolean`  | (Opcional) Se verdadeiro, inclui as datas de início e fim        |

### Retorno

| Tipo       | Descrição                                 |
| ---------- | ----------------------------------------- |
| `boolean`  | Verdadeiro se a data estiver no intervalo  |

## Exemplos

```typescript
isBetween(new Date("2024-06-10"), new Date("2024-06-01"), new Date("2024-06-30"));
// => true

isBetween(new Date("2024-06-01"), new Date("2024-06-01"), new Date("2024-06-30"), true);
// => true
```

## Notas

* Lança um erro se alguma das datas não for válida.
* Útil para validar intervalos de datas.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date