# adjustDate  
Ajusta a data fornecida, modificando-a com base na quantidade e unidade de tempo especificadas. A função suporta diferentes unidades de tempo, como milissegundos, segundos, minutos, horas, dias, meses e anos.

## Sintaxe
```typescript
adjustDate(date: Date, amount: number, unit: TimeUnit): Date
```

### Parâmetros

| Parâmetro | Tipo        | Descrição                                |
|-----------|-------------|------------------------------------------|
| `date`    | `Date`      | A data que será ajustada.                |
| `amount`  | `number`    | A quantidade a ser adicionada ou subtraída da data. Um número negativo subtrai a quantidade. |
| `unit`    | `TimeUnit`  | A unidade de tempo a ser ajustada. Pode ser um dos seguintes valores: `"milliseconds"`, `"seconds"`, `"minutes"`, `"hours"`, `"days"`, `"months"`, `"years"`. |

### Retorno

| Tipo    | Descrição                                              |
|---------|--------------------------------------------------------|
| `Date`  | Retorna a nova data ajustada, ou uma data inválida (`NaN`) se a data fornecida for inválida. |

## Exemplos

### Exemplo 1: Ajustando a data por milissegundos
```typescript
const currentDate = new Date();
const newDate = adjustDate(currentDate, 500, "milliseconds");
console.log(newDate); // A data ajustada em 500 milissegundos
```

### Exemplo 2: Ajustando a data por horas
```typescript
const currentDate = new Date();
const newDate = adjustDate(currentDate, -2, "hours");
console.log(newDate); // A data ajustada para 2 horas atrás
```

### Exemplo 3: Ajustando a data por dias
```typescript
const currentDate = new Date();
const newDate = adjustDate(currentDate, 5, "days");
console.log(newDate); // A data ajustada para 5 dias à frente
```

### Exemplo 4: Passando uma data inválida
```typescript
const invalidDate = new Date("invalid date");
const newDate = adjustDate(invalidDate, 1, "days");
console.log(newDate); // Retorna uma data inválida (NaN)
```

## Notas
- A função utiliza a função auxiliar `isValidDate` para verificar se a data fornecida é válida.
- Se a data fornecida for inválida, a função retorna uma nova data com o valor `NaN`.
- Caso a unidade de tempo seja inválida, a função exibe um erro no console.

## Dependências
[isValidDate](./isValidDate.md): Função utilizada para validar a data fornecida.

## Código Fonte
::: code-group
typescript
```typescript
import isValidDate from "./isValidDate";

type TimeUnit = "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "months" | "years";

function adjustDate(date: Date, amount: number, unit: TimeUnit): Date {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return new Date(NaN);
  };

  const adjustedDate = new Date(date);

  switch (unit) {
    case "milliseconds":
      adjustedDate.setMilliseconds(adjustedDate.getMilliseconds() + amount);
      break;
    case "seconds":
      adjustedDate.setSeconds(adjustedDate.getSeconds() + amount);
      break;
    case "minutes":
      adjustedDate.setMinutes(adjustedDate.getMinutes() + amount);
      break;
    case "hours":
      adjustedDate.setHours(adjustedDate.getHours() + amount);
      break;
    case "days":
      adjustedDate.setDate(adjustedDate.getDate() + amount);
      break;
    case "months":
      adjustedDate.setMonth(adjustedDate.getMonth() + amount);
      break;
    case "years":
      adjustedDate.setFullYear(adjustedDate.getFullYear() + amount);
      break;
    default:
      console.error("Invalid time unit");
  }

  return adjustedDate;
}
```

```javascript
import isValidDate from "./isValidDate";

function adjustDate(date, amount, unit) {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return new Date(NaN);
  };

  const adjustedDate = new Date(date);

  switch (unit) {
    case "milliseconds":
      adjustedDate.setMilliseconds(adjustedDate.getMilliseconds() + amount);
      break;
    case "seconds":
      adjustedDate.setSeconds(adjustedDate.getSeconds() + amount);
      break;
    case "minutes":
      adjustedDate.setMinutes(adjustedDate.getMinutes() + amount);
      break;
    case "hours":
      adjustedDate.setHours(adjustedDate.getHours() + amount);
      break;
    case "days":
      adjustedDate.setDate(adjustedDate.getDate() + amount);
      break;
    case "months":
      adjustedDate.setMonth(adjustedDate.getMonth() + amount);
      break;
    case "years":
      adjustedDate.setFullYear(adjustedDate.getFullYear() + amount);
      break;
    default:
      console.error("Invalid time unit");
  }

  return adjustedDate;
}
```
:::

## Referências
- [MDN: `Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [MDN: `setMilliseconds`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds)
- [MDN: `setSeconds`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds)
- [MDN: `setMinutes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes)
- [MDN: `setHours`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours)
- [MDN: `setDate`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate)
- [MDN: `setMonth`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth)
- [MDN: `setFullYear`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear)