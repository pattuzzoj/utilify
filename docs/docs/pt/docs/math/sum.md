# sum

A função `sum` calcula a soma de todos os números em um array. Ela retorna o total da soma dos valores fornecidos.

## Sintaxe

```typescript
function sum(values: number[]): number
```

### Parâmetros

| Nome   | Tipo       | Descrição                                          |
|--------|------------|----------------------------------------------------|
| values | `number[]` | Um array de números a ser somado.                  |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `number` | A soma de todos os números no array.           |

## Exemplos

```typescript
console.log(sum([1, 2, 3, 4]));  // Saída: 10
console.log(sum([10, -5, 5]));   // Saída: 10
console.log(sum([0, 0, 0]));     // Saída: 0
```

## Notas

- A função utiliza o método `reduce()` para acumular a soma dos valores no array, começando com um valor inicial de 0.
- Essa função funciona com arrays de números e retornará 0 caso o array esteja vazio.

## Código Fonte

::: code-group
```typescript
function sum(values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}
```

```javascript
function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}
```
::: 

## Referências

- [Array.prototype.reduce()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)