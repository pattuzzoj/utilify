# before  

A função `before` retorna um novo array ou string contendo todos os elementos ou caracteres antes do índice especificado. É útil para extrair um subarray ou substring até um ponto específico.  

## Sintaxe  

```typescript
function before(str: string, index: number): string;
function before<T>(arr: T[], index: number): T[];
```  

### Parâmetros  

| Nome    | Tipo         | Descrição                                                              |
|---------|-------------|------------------------------------------------------------------------|
| `str`   | `string`    | A string original da qual os caracteres serão extraídos.              |
| `arr`   | `T[]`       | O array original do qual os elementos serão extraídos.                |
| `index` | `number`    | O índice antes do qual os elementos ou caracteres serão incluídos no novo array ou string. |  

### Retorno  

| Tipo     | Descrição                                                                |
|----------|--------------------------------------------------------------------------|
| `string` | Uma nova string contendo todos os caracteres antes do índice especificado. |
| `T[]`    | Um novo array contendo todos os elementos antes do índice especificado. |  

## Exemplos  

### Exemplo com Array  

```typescript
const data = [1, 2, 3, 4, 5];

// Elementos antes do índice 2
console.log(before(data, 2)); // [1, 2]

// Elementos antes do índice 0
console.log(before(data, 0)); // []

// Índice fora do intervalo
console.log(before(data, 10)); // [1, 2, 3, 4, 5]

// Índice negativo
console.log(before(data, -1)); // []
```  

### Exemplo com String  

```typescript
const text = "Hello, World!";

// Caracteres antes do índice 5
console.log(before(text, 5)); // "Hello"

// Caracteres antes do índice 0
console.log(before(text, 0)); // ""

// Índice fora do intervalo
console.log(before(text, 20)); // "Hello, World!"

// Índice negativo
console.log(before(text, -1)); // ""
```  

## Notas  

- Se o índice for menor ou igual a zero, será retornado um array ou string vazio.  
- Se o índice for negativo, ele será tratado como zero.  
- Se o índice for maior que o comprimento do array ou da string, o array ou a string inteira será retornado.  

## Código-fonte  

::: code-group  
```typescript
function before(str: string, index: number): string;
function before<T>(arr: T[], index: number): T[];
function before(arr: any, index: number): any {  
  return arr.slice(0, index);  
}
```  

```javascript
function before(arr, index) {  
  return arr.slice(0, index);  
}
```  
:::  

## Referências  

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)  
- [String.prototype.slice() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice)