# isWeekday  
Verifica se a data fornecida representa um dia de semana (segunda a sexta-feira). A função retorna `undefined` se a data fornecida for inválida.

## Sintaxe
```typescript
isWeekday(date: Date): boolean | undefined
```

### Parâmetros

| Parâmetro | Tipo    | Descrição                                                  |
|-----------|---------|------------------------------------------------------------|
| `date`    | `Date`  | O objeto `Date` a ser verificado.                           |

### Retorno

| Tipo        | Descrição                                                  |
|-------------|------------------------------------------------------------|
| `boolean`   | Retorna `true` se a data for um dia de semana (segunda a sexta-feira), caso contrário, retorna `false`. |
| `undefined` | Retorna `undefined` se a data fornecida for inválida.       |

## Exemplos

### Exemplo 1: Data em um dia de semana
```typescript
const dataDiaDeSemana = new Date("2025-01-06"); // Segunda-feira
console.log(isWeekday(dataDiaDeSemana)); // true
```

### Exemplo 2: Data no final de semana
```typescript
const dataFinalDeSemana = new Date("2025-01-04"); // Sábado
console.log(isWeekday(dataFinalDeSemana)); // false
```

### Exemplo 3: Data inválida
```typescript
const dataInvalida = new Date("data inválida");
console.log(isWeekday(dataInvalida)); // undefined
```

## Notas
- A função utiliza `isValidDate` para garantir que a data fornecida seja válida antes de verificar se é um dia de semana.
- Ela verifica se o dia da semana está entre `1` (segunda-feira) e `5` (sexta-feira) com base no método `getDay()` do objeto `Date`.

## Dependências
[isValidDate](./isValidDate.md): Função utilizada para validar a data fornecida.

## Código Fonte
::: code-group

```typescript
import isValidDate from "./isValidDate";

function isWeekday(date: Date): boolean | undefined {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  };
  
  const day = date.getDay();

  return 0 < day && day < 6;
}
```

```javascript
import isValidDate from "./isValidDate";

function isWeekday(date) {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  };
  
  const day = date.getDay();

  return 0 < day && day < 6;
}
```
:::

## Referências
- [MDN: `Date.prototype.getDay`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)