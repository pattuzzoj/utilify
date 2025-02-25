# factorial

A função `factorial` calcula o fatorial de um número inteiro positivo. O fatorial de um número \( n \) é o produto de todos os inteiros de \( 1 \) até \( n \). Para \( n = 0 \), o resultado é definido como \( 1 \).

## Sintaxe

```typescript
function factorial(value: number): number
```

### Parâmetros

| Nome  | Tipo     | Descrição                                |
|-------|----------|------------------------------------------|
| value | `number` | O número inteiro positivo para calcular o fatorial. |

### Retorno

| Tipo    | Descrição                                       |
|---------|-------------------------------------------------|
| `number`| O fatorial do número de entrada.                |

## Exemplos

```typescript
console.log(factorial(5)); // Saída: 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // Saída: 1 (fatorial de 0 é definido como 1)
console.log(factorial(3)); // Saída: 6 (3 * 2 * 1)
```

## Notas

- O valor de entrada deve ser um número inteiro não negativo. Para valores negativos, a função pode retornar resultados inesperados ou gerar erros, dependendo do contexto.
- Para otimizar cálculos frequentes, considere usar memoização ou uma abordagem recursiva dependendo do caso de uso.

## Código Fonte

::: code-group
```typescript
function factorial(value: number): number {
  let result = 1;

  for (let num = value; num >= 1; num--) {
    result *= num;
  }

  return result;
}
```

```javascript
function factorial(value) {
  let result = 1;

  for (let num = value; num >= 1; num--) {
    result *= num;
  }

  return result;
}
```
::: 

## Referências

- [Operador de Multiplicação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Multiplication)  
- [Estruturas de Repetição](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for)