# roundTo

Arredonda um número para uma quantidade específica de casas decimais.

## Sintaxe
```typescript
roundTo(value: number, decimals: number): number
```

#### Parâmetros

| Nome       | Tipo      | Descrição                  |
|------------|-----------|----------------------------|
| `value`    | `number`  | Valor a ser arredondado.   |
| `decimals` | `number`  | Número de casas decimais.  |

## Retorno

| Tipo      | Descrição            |
|-----------|----------------------|
| `number`  | Valor arredondado.   | para o número especificado de casas decimais.

## Exemplo
```typescript
roundTo(3.14159, 2); // 3.14
roundTo(1.005, 2); // 1.01
roundTo(-2.718, 1); // -2.7
```

## Notas
- Lança `TypeError` se algum argumento não for número.
- `decimals` deve ser inteiro não negativo.
- Pode apresentar pequenas imprecisões devido à representação de ponto flutuante.

## Referências
- [MDN: Math.round()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round)