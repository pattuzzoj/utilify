# formatDate  
Formata uma instância de `Date` em uma string usando um formato de data especificado e um separador.

## Sintaxe
```typescript
formatDate(date: Date, format?: DateFormat, separator?: string): string | undefined
```

### Parâmetros

| Parâmetro    | Tipo                    | Descrição                                                                                     |
|--------------|-------------------------|-----------------------------------------------------------------------------------------------|
| `date`       | `Date`                  | O objeto de data a ser formatado.                                                             |
| `format`     | `"DMY" \| "MDY" \| "YMD"` | (Opcional) O formato desejado da data: `"DMY"` (dia/mês/ano), `"MDY"` (mês/dia/ano) ou `"YMD"` (ano/mês/dia). Padrão: `"DMY"`. |
| `separator`  | `string`                | (Opcional) O separador usado entre as partes da data (por exemplo, `/`, `-`, `.`). Padrão: `/`.|

### Retorno

| Tipo          | Descrição                                                                                            |
|---------------|--------------------------------------------------------------------------------------------------------|
| `string`      | A string formatada da data com base no formato e separador especificados.                               |
| `undefined`   | Retorna `undefined` se a data fornecida for inválida ou o formato especificado não for suportado.      |

## Exemplos

### Exemplo 1: Formato e separador padrão
```typescript
formatDate(new Date("2025-01-05")); 
// Saída: "05/01/2025"
```

### Exemplo 2: Usando o formato MDY
```typescript
formatDate(new Date("2025-01-05"), "MDY"); 
// Saída: "01/05/2025"
```

### Exemplo 3: Usando o formato YMD com um separador personalizado
```typescript
formatDate(new Date("2025-01-05"), "YMD", "-"); 
// Saída: "2025-01-05"
```

### Exemplo 4: Data inválida
```typescript
formatDate(new Date("data-invalida"));
// Saída: undefined e log: "Invalid date"
```

### Exemplo 5: Formato inválido
```typescript
formatDate(new Date("2025-01-05"), "XYZ" as DateFormat);
// Saída: undefined e log: "Invalid date format: XYZ"
```

## Notas
- Formatos suportados:
  - `"DMY"`: Dia/Mês/Ano.
  - `"MDY"`: Mês/Dia/Ano.
  - `"YMD"`: Ano/Mês/Dia.
- A função verifica se a instância `Date` é válida usando `isValidDate`.
- Separadores personalizados, como `-` ou `.`, podem ser usados para formatar a data.

## Dependências
- [isValidDate](./isValidDate.md): Verifica se o valor fornecido é uma instância válida de `Date`.

## Código Fonte
::: code-group

```typescript
import isValidDate from "./isValidDate";

type DateFormat = "DMY" | "MDY" | "YMD";

function formatDate(date: Date, format: DateFormat = "DMY", separator: string = "/"): string | undefined {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  };

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  switch (format) {
    case "DMY":
      return `${day}${separator}${month}${separator}${year}`;
    case "MDY":
      return `${month}${separator}${day}${separator}${year}`;
    case "YMD":
      return `${year}${separator}${month}${separator}${day}`;
    default:
      console.error(`Invalid date format: ${format}`);
      return;
  }
}
```

```javascript
import isValidDate from "./isValidDate";

function formatDate(date, format = "DMY", separator = "/") {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  }

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  switch (format) {
    case "DMY":
      return `${day}${separator}${month}${separator}${year}`;
    case "MDY":
      return `${month}${separator}${day}${separator}${year}`;
    case "YMD":
      return `${year}${separator}${month}${separator}${day}`;
    default:
      console.error(`Invalid date format: ${format}`);
      return;
  }
}
```
:::

## Referências
- [MDN: `Date.prototype.getDate`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate)
- [MDN: `Date.prototype.getMonth`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)
- [MDN: `Date.prototype.getFullYear`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)
- [MDN: `String.prototype.padStart`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)