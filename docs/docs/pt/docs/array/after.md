# after  

A função `after` retorna um novo array ou string contendo todos os elementos ou caracteres após o índice especificado. É útil para obter um subarray ou substring começando de um ponto específico.  

## Sintaxe  

```typescript
function after(str: string, index: number): string;
function after<T>(arr: T[], index: number): T[];
```  

### Parâmetros  

| Nome    | Tipo         | Descrição                                                              |
|---------|-------------|------------------------------------------------------------------------|
| `arr`   | `T[]`       | O array original do qual os elementos serão extraídos.                |
| `str`   | `string`    | A string original da qual os caracteres serão extraídos.              |
| `index` | `number`    | O índice após o qual os elementos ou caracteres serão incluídos no novo array ou string. |  

### Retorno  

| Tipo     | Descrição                                                                |
|----------|--------------------------------------------------------------------------|
| `T[]`    | Um novo array contendo todos os elementos após o índice especificado.   |
| `string` | Uma nova string contendo todos os caracteres após o índice especificado. |  

## Exemplos  

### Exemplo com Array  

```typescript
const data = [1, 2, 3, 4, 5];

// Elementos após o índice 2
console.log(after(data, 2)); // [4, 5]

// Elementos após o índice -4 (deslocamento a partir do final)
console.log(after(data, -4)); // [3, 4, 5]

// Índice fora do intervalo
console.log(after(data, 10)); // []
```  

### Exemplo com String  

```typescript
const text = "Hello, World!";

// Caracteres após o índice 7
console.log(after(text, 7)); // "World!"

// Caracteres após o índice -6 (deslocamento a partir do final)
console.log(after(text, -6)); // "World!"

// Índice fora do intervalo
console.log(after(text, 20)); // ""
```  

## Observações  

- Se o índice for maior ou igual ao comprimento do array ou string, um array ou string vazio será retornado.  
- Se o índice for negativo, será tratado como um deslocamento a partir do final do array ou string.  

## Código-fonte  

::: code-group  
```typescript
function after(str: string, index: number): string;
function after<T>(arr: T[], index: number): T[];
function after(arr: any, index: number): any {  
  return arr.slice(index + 1);  
}
```  

```javascript
function after(arr, index) {  
  return arr.slice(index + 1);  
}
```  
:::  

## Referências  

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)  
- [String.prototype.slice() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice)