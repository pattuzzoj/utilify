# sumOfDigits

A função `sumOfDigits` calcula a soma dos dígitos de um número. Ela converte o número em uma string, separa seus dígitos e soma todos eles.

## Sintaxe

```typescript
function sumOfDigits(num: number): number
```

### Parâmetros

| Nome  | Tipo     | Descrição                                      |
|-------|----------|------------------------------------------------|
| num   | `number` | O número cujos dígitos serão somados.          |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `number` | A soma dos dígitos do número.                  |

## Exemplos

```typescript
console.log(sumOfDigits(123));   // Saída: 6
console.log(sumOfDigits(987));   // Saída: 24
console.log(sumOfDigits(0));     // Saída: 0
```

## Notas

- A função converte o número em uma string e usa o método `split()` para dividir a string em um array de dígitos.
- Em seguida, utiliza o método `reduce()` para somar os valores dos dígitos, convertendo cada dígito de volta para um número inteiro com `parseInt()`.

## Código Fonte

::: code-group
```typescript
function sumOfDigits(num: number): number {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}
```

```javascript
function sumOfDigits(num) {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}
```
::: 

## Referências

- [String.prototype.split()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [Array.prototype.reduce()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [parseInt()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt)