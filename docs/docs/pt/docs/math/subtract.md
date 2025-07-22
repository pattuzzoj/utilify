# subtract

Subtrai dois ou mais valores numéricos sequencialmente.

## Sintaxe
```typescript
subtract(...values: number[]): number
```

## Parâmetros

| Nome       | Tipo        | Descrição                                         |
|------------|------------|---------------------------------------------------|
| `...values`| `number[]`  | Dois ou mais números a serem subtraídos em sequência. |

## Retorno

| Tipo     | Descrição                                         |
|----------|---------------------------------------------------|
| `number` | O resultado da subtração sequencial dos valores fornecidos. |

## Exemplo
```typescript
subtract(10, 3); // 7
subtract(20, 5, 2); // 13
subtract(5); // 5
subtract(); // 0
```

## Notas
- Lança `TypeError` se algum argumento não for número.
- Se nenhum argumento for fornecido, retorna 0.

## Referências
- [MDN: Operador de subtração](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Subtraction)