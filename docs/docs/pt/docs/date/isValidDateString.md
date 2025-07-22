# isValidDateString

A função `isValidDateString` verifica se uma string representa uma data válida no formato aceito pelo JavaScript.

## Sintaxe

```typescript
isValidDateString(value: string): boolean;
```

### Parâmetros

| Nome     | Tipo       | Descrição                        |
| -------- | ---------- | -------------------------------- |
| `value`  | `string`   | String a ser verificada          |

### Retorno

| Tipo       | Descrição                                         |
| ---------- | ------------------------------------------------- |
| `boolean`  | Verdadeiro se a string for uma data válida         |

## Exemplos

```typescript
isValidDateString("2024-06-10");
// => true

isValidDateString("10/06/2024");
// => true

isValidDateString("data inválida");
// => false
```

## Notas

* Útil para validar strings antes de convertê-las em datas.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date