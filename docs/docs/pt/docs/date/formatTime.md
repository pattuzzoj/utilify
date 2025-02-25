# formatTime  
Formata uma instância de `Date` em uma string com base no formato especificado. O formato padrão é `"hh:mm"`.

## Sintaxe
```typescript
formatTime(date: Date, format?: string): string | undefined
```

### Parâmetros

| Parâmetro   | Tipo     | Descrição                                                                                  |
|-------------|----------|----------------------------------------------------------------------------------------------|
| `date`      | `Date`   | O objeto de data que será formatado.                                                         |
| `format`    | `string` | (Opcional) O formato desejado para a string de saída. Tokens suportados incluem `hh`, `mm`, `ss`, `ms` e `a`. Valor padrão: `"hh:mm"`. |

### Retorno

| Tipo          | Descrição                                                                                           |
|---------------|------------------------------------------------------------------------------------------------------|
| `string`      | A string de data formatada com base no formato fornecido.                                             |
| `undefined`   | Retorna `undefined` se a data fornecida for inválida.                                                |

## Exemplos

### Exemplo 1: Usando o formato padrão
```typescript
formatTime(new Date("2025-01-01T15:30:45")); 
// Saída: "15:30"
```

### Exemplo 2: Formatação com AM/PM
```typescript
formatTime(new Date("2025-01-01T15:30:45"), "hh:mm a"); 
// Saída: "3:30 PM"
```

### Exemplo 3: Incluindo milissegundos
```typescript
formatTime(new Date("2025-01-01T15:30:45.123"), "hh:mm:ss.ms"); 
// Saída: "15:30:45.123"
```

### Exemplo 4: Data inválida
```typescript
formatTime(new Date("invalid-date"), "hh:mm:ss");
// Saída: undefined e log: "Invalid date"
```

## Notas
- Tokens disponíveis para formatação:
  - `hh`: Horas (formato de 12 horas ou 24 horas dependendo do uso de `a` no formato).
  - `mm`: Minutos (sempre com dois dígitos).
  - `ss`: Segundos (sempre com dois dígitos).
  - `ms`: Milissegundos (sempre com três dígitos).
  - `a`: Indica o período de tempo (`AM` ou `PM`) para formatos de 12 horas.
- Caso o parâmetro `format` não seja fornecido, será utilizado o formato padrão `"hh:mm"`.
- A função usa `isValidDate` para verificar a validade do objeto `Date`.

## Dependências
- [isValidDate](./isValidDate.md): Garante que o valor fornecido seja uma instância válida de `Date`.

## Código Fonte
::: code-group
typescript
```typescript
import isValidDate from "./isValidDate";

function formatTime(date: Date, format: string = "hh:mm"): string | undefined {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  }

  const useAMPM = format.search("a") !== -1;
  const hours = String(useAMPM ? date.getHours() % 12 || 12 : date.getHours());
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
  const milliseconds = String(date.getMilliseconds()).padStart(3, "0");
  const period = date.getHours() >= 12 ? "PM" : "AM";

  return format
  .toLowerCase()
  .replace("hh", hours)
  .replace("mm", minutes)
  .replace("ss", seconds)
  .replace("ms", milliseconds)
  .replace("a", period);
}
```

javascript
```javascript
import isValidDate from "./isValidDate";

function formatTime(date, format = "hh:mm") {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  }

  const useAMPM = format.search("a") !== -1;
  const hours = String(useAMPM ? date.getHours() % 12 || 12 : date.getHours());
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
  const milliseconds = String(date.getMilliseconds()).padStart(3, "0");
  const period = date.getHours() >= 12 ? "PM" : "AM";

  return format
  .toLowerCase()
  .replace("hh", hours)
  .replace("mm", minutes)
  .replace("ss", seconds)
  .replace("ms", milliseconds)
  .replace("a", period);
}
```
:::

## Referências
- [MDN: `Date.prototype.getHours`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours)
- [MDN: `Date.prototype.getMinutes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes)
- [MDN: `Date.prototype.getSeconds`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds)
- [MDN: `String.prototype.padStart`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)