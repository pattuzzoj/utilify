# factorial

Calcula o fatorial de um número inteiro não negativo.

## Sintaxe
```typescript
factorial(value: number): number
```

## Parâmetros

| Nome     | Tipo      | Descrição                      |
|----------|-----------|--------------------------------|
| `value`  | `number`  | Número inteiro não negativo.   |

## Retorno

| Tipo      | Descrição                |
|-----------|--------------------------|
| `number`  | O fatorial de `value`.   |

## Exemplo
```typescript
factorial(5); // 120
factorial(0); // 1
```

## Notas
- Lança `TypeError` se o valor não for inteiro não negativo.
- O fatorial de 0 é 1 por definição.

## Referências
- [MDN: Fatorial](https://developer.mozilla.org/pt-BR/docs/Glossary/Factorial)