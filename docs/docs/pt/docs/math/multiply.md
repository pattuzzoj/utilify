# multiply

Multiplica dois ou mais valores numéricos.

## Sintaxe
```typescript
multiply(...values: number[]): number
```

## Parâmetros

| Nome        | Tipo        | Descrição                              |
|-------------|-------------|----------------------------------------|
| `...values` | `number[]`  | Dois ou mais números a serem multiplicados. |

## Retorno

| Tipo     | Descrição                                         |
|----------|---------------------------------------------------|
| `number` | O resultado da multiplicação de todos os valores fornecidos. |

## Exemplo
```typescript
multiply(2, 3); // 6
multiply(2, 3, 4); // 24
multiply(5); // 5
multiply(); // 1
```

## Notas
- Lança `TypeError` se algum argumento não for número.
- Se nenhum argumento for fornecido, retorna 1 (elemento neutro da multiplicação).

## Referências
- [MDN: Operador de multiplicação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Multiplication)