# isTomorrow

A função `isTomorrow` verifica se uma data corresponde ao dia de amanhã.

## Sintaxe

```typescript
isTomorrow(date: Date): boolean;
```

### Parâmetros

| Nome    | Tipo     | Descrição                  |
| ------- | -------- | -------------------------- |
| `date`  | `Date`   | Data a ser verificada      |

### Retorno

| Tipo       | Descrição                                 |
| ---------- | ----------------------------------------- |
| `boolean`  | Verdadeiro se a data for o dia de amanhã   |

## Exemplos

```typescript
isTomorrow(new Date(Date.now() + 24 * 60 * 60 * 1000));
// => true

isTomorrow(new Date("2024-06-11"));
// => depende do dia atual
```

## Notas

* Lança um erro se a data não for válida.
* Útil para validações relacionadas ao dia seguinte.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date