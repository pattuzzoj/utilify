# isYesterday

A função `isYesterday` verifica se uma data corresponde ao dia anterior à data atual.

## Sintaxe

```typescript
isYesterday(date: Date): boolean;
```

### Parâmetros

| Nome    | Tipo     | Descrição                  |
| ------- | -------- | -------------------------- |
| `date`  | `Date`   | Data a ser verificada      |

### Retorno

| Tipo       | Descrição                                 |
| ---------- | ----------------------------------------- |
| `boolean`  | Verdadeiro se a data for o dia de ontem    |

## Exemplos

```typescript
isYesterday(new Date(Date.now() - 24 * 60 * 60 * 1000));
// => true

isYesterday(new Date());
// => false
```

## Notas

* Lança um erro se a data não for válida.
* Útil para validações de datas relativas.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date