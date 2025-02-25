# average

A função `average` calcula a média aritmética de um array de números. Se o array estiver vazio, a função retorna `0`.

## Sintaxe

```typescript
function average(values: number[]): number
```

### Parâmetros

| Nome   | Tipo      | Descrição                     |
|--------|-----------|-------------------------------|
| values | `number[]`| Um array de números a ser processado. |

### Retorno

| Tipo    | Descrição                                     |
|---------|-----------------------------------------------|
| `number`| A média aritmética dos números no array.      |
| `0`     | Retornado se o array estiver vazio.           |

## Exemplos

```typescript
const values = [10, 20, 30];
console.log(average(values)); // Saída: 20

console.log(average([])); // Saída: 0
```

## Notas

- A função utiliza a função `sum` para calcular a soma dos números no array.
- Certifique-se de que todos os elementos do array sejam números para evitar resultados inesperados.

## Dependências

- [sum](./sum.md): Responsável por calcular a soma dos elementos do array.

## Código Fonte

::: code-group
```typescript
import sum from "./sum";

function average(values: number[]): number {
  return values.length ? (sum(values) / values.length) : 0;
}
```

```javascript
import sum from "./sum";

function average(values) {
  return values.length ? (sum(values) / values.length) : 0;
}
```
::: 

## Referências

- [Array.prototype.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)  
- [Divisão em JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division)