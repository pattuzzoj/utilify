# isToday

A função `isToday` verifica se uma data corresponde ao dia atual.

## Sintaxe

```typescript
isToday(date: Date): boolean;
```

### Parâmetros

| Nome    | Tipo     | Descrição                  |
| ------- | -------- | -------------------------- |
| `date`  | `Date`   | Data a ser verificada      |

### Retorno

| Tipo       | Descrição                                 |
| ---------- | ----------------------------------------- |
| `boolean`  | Verdadeiro se a data for o dia atual       |

## Exemplos

```typescript
isToday(new Date());
// => true

isToday(new Date("2024-06-10"));
// => depende do dia atual
```

## Notas

* Lança um erro se a data não for válida.
* Útil para validações relacionadas ao dia corrente.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
