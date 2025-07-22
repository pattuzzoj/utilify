# toDate

A função `toDate` converte um valor em uma instância de `Date`. Aceita objetos `Date`, strings ou números.

## Sintaxe

```typescript
toDate(value: Date): Date;
toDate(value: string): Date;
toDate(value: number): Date;
```

### Parâmetros

| Nome     | Tipo             | Descrição                        |
| -------- | ---------------- | -------------------------------- |
| `value`  | `string\|Date`    | Valor a ser convertido em data   |

### Retorno

| Tipo    | Descrição                                 |
| ------- | ----------------------------------------- |
| `Date`  | Objeto Date correspondente ao valor       |

## Exemplos

```typescript
toDate("2024-06-10");
// => Date Mon Jun 10 2024

toDate(1717977600000);
// => Date Mon Jun 10 2024

toDate(new Date());
// => Date atual

toDate({});
// => Date inválida
```

## Notas

* Retorna uma instância inválida de `Date` se o valor não puder ser convertido.
* Útil para normalizar diferentes formatos de data.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date