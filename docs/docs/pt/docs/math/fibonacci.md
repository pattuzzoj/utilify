# fibonacci

Calcula o n-ésimo número da sequência de Fibonacci.

## Sintaxe
```typescript
fibonacci(num: number): number
```

## Parâmetros

| Nome   | Tipo      | Descrição                                 |
|--------|-----------|-------------------------------------------|
| `num`  | `number`  | Índice (inteiro não negativo) na sequência de Fibonacci. |

## Retorno

| Tipo      | Descrição                          |
|-----------|------------------------------------|
| `number`  | O n-ésimo número de Fibonacci.     |

## Exemplo
```typescript
fibonacci(0); // 0
fibonacci(1); // 1
fibonacci(6); // 8
```

## Notas
- Lança `TypeError` se o argumento não for inteiro não negativo.
- Implementação recursiva; para valores grandes, considere abordagem iterativa.

## Referências
- [MDN: Fibonacci](https://developer.mozilla.org/pt-BR/docs/Glossary/Fibonacci_number)