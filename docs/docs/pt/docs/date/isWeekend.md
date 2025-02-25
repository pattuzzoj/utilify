# isWeekend  
Verifica se a data fornecida representa um final de semana (sábado ou domingo). A função retorna `undefined` se a data fornecida for inválida.

## Sintaxe
```typescript
isWeekend(date: Date): boolean | undefined
```

### Parâmetros

| Parâmetro | Tipo    | Descrição                                                  |
|-----------|---------|------------------------------------------------------------|
| `date`    | `Date`  | O objeto `Date` a ser verificado.                           |

### Retorno

| Tipo        | Descrição                                                  |
|-------------|------------------------------------------------------------|
| `boolean`   | Retorna `true` se a data for no final de semana (sábado ou domingo), caso contrário, retorna `false`. |
| `undefined` | Retorna `undefined` se a data fornecida for inválida.       |

## Exemplos

### Exemplo 1: Data no final de semana
```typescript
const dataFinalDeSemana = new Date("2025-01-04"); // Sábado
console.log(isWeekend(dataFinalDeSemana)); // true
```

### Exemplo 2: Data em um dia de semana
```typescript
const dataDiaDeSemana = new Date("2025-01-06"); // Segunda-feira
console.log(isWeekend(dataDiaDeSemana)); // false
```

### Exemplo 3: Data inválida
```typescript
const dataInvalida = new Date("data inválida");
console.log(isWeekend(dataInvalida)); // undefined
```

## Notas
- A função utiliza `isValidDate` para garantir que a data fornecida seja válida antes de verificar se é um final de semana.
- Ela verifica se o dia é `0` (domingo) ou `6` (sábado) com base no método `getDay()` do objeto `Date`.

## Dependências
[isValidDate](./isValidDate.md): Função utilizada para validar a data fornecida.

## Código Fonte
::: code-group

```typescript
import isValidDate from "./isValidDate";

function isWeekend(date: Date): boolean | undefined {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  };

  const day = date.getDay();

  return 0 === day || day === 6;
}
```

```javascript
import isValidDate from "./isValidDate";

function isWeekend(date) {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  };

  const day = date.getDay();

  return 0 === day || day === 6;
}
```
:::

## Referências
- [MDN: `Date.prototype.getDay`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)