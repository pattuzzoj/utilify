# isValidDate

A função `isValidDate` verifica se um valor é uma data válida do JavaScript.

## Sintaxe

```typescript
isValidDate(value: any): boolean;
```

### Parâmetros

| Nome     | Tipo     | Descrição                        |
| -------- | -------- | -------------------------------- |
| `value`  | `any`    | Valor a ser verificado           |

### Retorno

| Tipo       | Descrição                                 |
| ---------- | ----------------------------------------- |
| `boolean`  | Verdadeiro se o valor for uma data válida  |

## Exemplos

```typescript
isValidDate(new Date());
// => true

isValidDate("2024-06-10");
// => true

isValidDate("data inválida");
// => false
```

## Notas

* Útil para validação de entradas antes de operações com datas.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date