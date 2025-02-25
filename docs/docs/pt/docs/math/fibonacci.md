# fibonacci

A função `fibonacci` calcula o número de Fibonacci em uma posição específica da sequência de Fibonacci utilizando recursão. A sequência de Fibonacci é definida como:  

- \( F(0) = 0 \)  
- \( F(1) = 1 \)  
- \( F(n) = F(n-1) + F(n-2) \) para \( n > 1 \).

## Sintaxe

```typescript
function fibonacci(num: number): number
```

### Parâmetros

| Nome | Tipo     | Descrição                                |
|------|----------|------------------------------------------|
| num  | `number` | A posição na sequência de Fibonacci a ser calculada. |

### Retorno

| Tipo    | Descrição                                       |
|---------|-------------------------------------------------|
| `number`| O número de Fibonacci na posição especificada.  |

## Exemplos

```typescript
console.log(fibonacci(0));  // Saída: 0
console.log(fibonacci(1));  // Saída: 1
console.log(fibonacci(6));  // Saída: 8 (F(6) = 8, calculado como F(5) + F(4))
```

## Notas

- Esta implementação utiliza recursão e não é otimizada para entradas grandes devido à complexidade de tempo exponencial (\( O(2^n) \)).
- Para melhor desempenho com entradas grandes, considere usar uma abordagem iterativa ou memoização.

## Código Fonte

::: code-group
```typescript
function fibonacci(num: number): number {
  return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}
```

```javascript
function fibonacci(num) {
  return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}
```
::: 

## Referências

- [Recursão](https://developer.mozilla.org/pt-BR/docs/Glossary/Recursion)  
- [Sequência de Fibonacci](https://pt.wikipedia.org/wiki/N%C3%BAmero_de_Fibonacci)  