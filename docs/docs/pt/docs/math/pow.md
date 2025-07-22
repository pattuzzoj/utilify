# pow

Calcula a potência de um número elevado a outro.

## Sintaxe
```typescript
pow(base: number, exponent: number): number
```

## Parâmetros

| Nome       | Tipo      | Descrição                 |
|------------|-----------|---------------------------|
| `base`     | `number`  | O número base.            |
| `exponent` | `number`  | O expoente ao qual a base será elevada. |

## Retorno

| Tipo      | Descrição                  |
|-----------|----------------------------|
| `number`  | O resultado da exponenciação. |

## Exemplo
```typescript
pow(2, 3); // 8
pow(5, 0); // 1
pow(4, 0.5); // 2
pow(-2, 3); // -8
```

## Notas
- Lança `TypeError` se algum argumento não for número.

## Referências
- [MDN: Math.pow()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)