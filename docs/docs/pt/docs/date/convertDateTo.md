# convertDateTo  
Converte um objeto `Date` fornecido em um formato de string especificado.

## Sintaxe
```typescript
convertDateTo(date: Date, format: DateFormat): string | undefined
```

### Parâmetros

| Parâmetro | Tipo                           | Descrição                                         |
|-----------|--------------------------------|-----------------------------------------------------|
| `date`    | `Date`                         | O objeto `Date` a ser convertido.                  |
| `format`  | `"string" \| "utc" \| "iso"`   | O formato desejado para a data. Os valores possíveis são `"string"`, `"utc"` ou `"iso"`. |

### Retorno

| Tipo     | Descrição                                    |
|----------|------------------------------------------------|
| `string` | A data formatada como uma string.              |
| `undefined` | Retorna `undefined` se a data for inválida. |

## Exemplos

### Exemplo 1: Converter data para string UTC
```typescript
const date = new Date();
convertDateTo(date, "utc");
// Saída: "Sat, 05 Jan 2025 10:30:00 GMT" (por exemplo)
```

### Exemplo 2: Converter data para string ISO
```typescript
const date = new Date();
convertDateTo(date, "iso");
// Saída: "2025-01-05T10:30:00.000Z"
```

### Exemplo 3: Converter data para formato string
```typescript
const date = new Date();
convertDateTo(date, "string");
// Saída: "Sat Jan 05 2025 10:30:00 GMT+0000 (Coordinated Universal Time)"
```

## Notas
- A função verifica se a `date` fornecida é válida usando a função `isValidDate`.
- O formato `utc` retorna a data no formato de string UTC (`Date.prototype.toUTCString`).
- O formato `iso` retorna a data no formato ISO (`Date.prototype.toISOString`).
- Se nenhum formato válido for fornecido, a função usa `Date.prototype.toString()` por padrão.

## Código Fonte
::: code-group

```typescript
import isValidDate from "./isValidDate";

type DateFormat = "string" | "utc" | "iso";

function convertDateTo(date: Date, format: DateFormat): string | undefined {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  };

  if (format === "utc") {
    return date.toUTCString();
  } else if (format === "iso") {
    return date.toISOString();
  }

  return date.toString();
}
```

```javascript
function convertDateTo(date, format) {
  if (isNaN(date.getTime())) {
    console.error("Invalid date");
    return;
  }

  if (format === "utc") {
    return date.toUTCString();
  } else if (format === "iso") {
    return date.toISOString();
  }

  return date.toString();
}
```
:::

## Referências
- [MDN: `Date.prototype.toUTCString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString)
- [MDN: `Date.prototype.toISOString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
- [MDN: `Date.prototype.toString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString)