# parseDate  
Converte uma string representando uma data para um objeto `Date`. A função valida a string antes de tentar realizar o parsing, retornando `undefined` se a data for inválida.

## Sintaxe
```typescript
parseDate(date: string): Date | undefined
```

### Parâmetros

| Parâmetro | Tipo    | Descrição                                                         |
|-----------|---------|-------------------------------------------------------------------|
| `date`    | `string`| A string representando a data a ser convertida para um objeto `Date`. |

### Retorno

| Tipo       | Descrição                                              |
|------------|--------------------------------------------------------|
| `Date`     | Retorna um objeto `Date` correspondente à string fornecida. |
| `undefined`| Retorna `undefined` se a string fornecida não for uma data válida. |

## Exemplos

### Exemplo 1: String de data válida
```typescript
const validDateString = "2025-01-05T12:00:00Z";
const parsedDate = parseDate(validDateString);
console.log(parsedDate); // A data correspondente à string fornecida
```

### Exemplo 2: String de data inválida
```typescript
const invalidDateString = "invalid date string";
const parsedDate = parseDate(invalidDateString);
console.log(parsedDate); // undefined
```

## Notas
- A função utiliza a função auxiliar `isValidDateString` para validar a string antes de tentar convertê-la para um objeto `Date`.
- Se a string não for válida, a função retorna `undefined` e exibe uma mensagem de erro no console.

## Dependências
[isValidDateString](./isValidDateString.md): Função utilizada para validar a string de data fornecida.

## Código Fonte
::: code-group

```typescript
import isValidDateString from "./isValidDateString";

function parseDate(date: string): Date | undefined {
  if (!isValidDateString(date)) {
    console.error("Data inválida");
    return;
  }
  
  return new Date(date);
}
```

```javascript
import isValidDateString from "./isValidDateString";

function parseDate(date) {
  if (!isValidDateString(date)) {
    console.error("Data inválida");
    return;
  }
  
  return new Date(date);
}
```
:::

## Referências
- [MDN: `Date`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date)