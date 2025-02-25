# adjustTimezone  
Ajusta a data fornecida para o offset de fuso horário especificado. A função calcula a diferença entre o offset de fuso horário atual e o desejado, e ajusta o horário de acordo.

## Sintaxe
```typescript
adjustTimezone(date: Date, timezoneOffset: number): Date
```

### Parâmetros

| Parâmetro      | Tipo      | Descrição                                                         |
|-----------------|-----------|-------------------------------------------------------------------|
| `date`          | `Date`    | A data que será ajustada de acordo com o novo offset de fuso horário. |
| `timezoneOffset`| `number`  | O offset de fuso horário desejado em minutos. Um número positivo indica um fuso horário a leste do UTC, enquanto um número negativo indica um fuso horário a oeste do UTC. |

### Retorno

| Tipo   | Descrição                                               |
|--------|---------------------------------------------------------|
| `Date` | Retorna a data ajustada conforme o offset de fuso horário especificado, ou uma data inválida (`NaN`) se a data fornecida for inválida. |

## Exemplos

### Exemplo 1: Ajustando para um fuso horário diferente
```typescript
const currentDate = new Date();
const newTimezoneOffset = -240; // UTC -4
const adjustedDate = adjustTimezone(currentDate, newTimezoneOffset);
console.log(adjustedDate); // A data ajustada para o fuso horário especificado
```

### Exemplo 2: Passando uma data inválida
```typescript
const invalidDate = new Date("data inválida");
const adjustedDate = adjustTimezone(invalidDate, -120);
console.log(adjustedDate); // Retorna uma data inválida (NaN)
```

## Notas
- A função utiliza a função auxiliar `isValidDate` para validar a data fornecida.
- O `timezoneOffset` é em minutos, com valores positivos indicando um fuso horário à frente do UTC e valores negativos indicando um fuso horário atrás do UTC.
- Se a data fornecida for inválida, a função retorna uma nova data com o valor `NaN`.

## Dependências
[isValidDate](./isValidDate.md): Função utilizada para validar a data fornecida.

## Código Fonte
::: code-group
typescript
```typescript
import isValidDate from "./isValidDate";

function adjustTimezone(date: Date, timezoneOffset: number): Date {
  if (!isValidDate(date)) {
    console.error("Data inválida");
    return new Date(NaN);
  }

  const currentTimezoneOffset = date.getTimezoneOffset();
  const offsetDifference = timezoneOffset - currentTimezoneOffset;
  return new Date(date.getTime() + offsetDifference * 60 * 1000);
}
```

```javascript
import isValidDate from "./isValidDate";

function adjustTimezone(date, timezoneOffset) {
  if (!isValidDate(date)) {
    console.error("Data inválida");
    return new Date(NaN);
  }

  const currentTimezoneOffset = date.getTimezoneOffset();
  const offsetDifference = timezoneOffset - currentTimezoneOffset;
  return new Date(date.getTime() + offsetDifference * 60 * 1000);
}
```
:::

## Referências
- [MDN: `Date.getTimezoneOffset`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)
- [MDN: `Date`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date)