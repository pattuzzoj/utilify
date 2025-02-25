# chunk

A função `chunk` divide um array ou string em partes menores do tamanho especificado. É útil quando você precisa dividir um grande conjunto de dados ou texto em partes menores, seja para processamento em lote, manipulação de dados ou formatação de texto.

## Sintaxe

```typescript
function chunk(str: string, size: number): string[];
function chunk<T>(arr: T[], size: number): T[][];
```

### Parâmetros

| Nome   | Tipo         | Descrição                                                      |
|--------|--------------|------------------------------------------------------------------|
| `str`  | `string`     | A string original a ser dividida em partes.                      |
| `arr`  | `T[]`        | O array original a ser dividido em partes.                       |
| `size` | `number`     | O tamanho de cada parte. Deve ser um número inteiro positivo.    |

### Retorno

| Tipo      | Descrição                                                                  |
|-----------|------------------------------------------------------------------------------|
| `string[]`| Retorna um novo array contendo partes menores da string original.            |
| `T[][]`   | Retorna um novo array contendo partes menores do array original.             |

## Exemplos

### Exemplo com Array

```typescript
const data = [1, 2, 3, 4, 5, 6, 7];

// Dividindo o array em partes de tamanho 3
console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]

// Dividindo o array em partes de tamanho 2
console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]

// Tamanho maior que o comprimento do array
console.log(chunk(data, 10)); // [[1, 2, 3, 4, 5, 6, 7]]

// Tamanho igual a zero
console.log(chunk(data, 0)); // []

// Tamanho negativo
console.log(chunk(data, -2)); // []
```

### Exemplo com String

```typescript
const text = "Hello, World!";

// Dividindo a string em partes de tamanho 5
console.log(chunk(text, 5)); // ["Hello", ", Wor", "ld!"]

// Dividindo a string em partes de tamanho 2
console.log(chunk(text, 2)); // ["He", "ll", "o,", " W", "or", "ld", "!"]

// Tamanho maior que o comprimento da string
console.log(chunk(text, 20)); // ["Hello, World!"]

// Tamanho igual a zero
console.log(chunk(text, 0)); // []

// Tamanho negativo
console.log(chunk(text, -2)); // []
```

## Observações

- Se o tamanho for maior que o comprimento do array ou string, será retornado um array contendo o array ou string original como uma única parte.
- Se o tamanho for menor ou igual a zero, a função retornará um array vazio.
- Pode ser usado, por exemplo, para dividir uma lista de itens em páginas, processar dados em lotes ou formatar texto em segmentos menores.

## Código Fonte

::: code-group
```typescript
function chunk(str: string, size: number): string[];
function chunk<T>(arr: T[], size: number): T[][];
function chunk(arr: any, size: number): any {
  const chunkedArray = [];
  for (let index = 0; index < arr.length; index += size) {
    chunkedArray.push(arr.slice(index, index + size));
  }
  return chunkedArray;
}
```

```javascript
function chunk(arr, size) {
  const chunkedArray = [];
  for (let index = 0; index < arr.length; index += size) {
    chunkedArray.push(arr.slice(index, index + size));
  }
  return chunkedArray;
}
```
:::

## Referências

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [String.prototype.slice() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice)