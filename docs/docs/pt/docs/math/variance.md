# variance

Calcula a variância amostral de um array de números.

## Sintaxe
```typescript
variance(numbers: number[]): number
```

## Parâmetros

| Nome      | Tipo        | Descrição                                 |
|-----------|-------------|-------------------------------------------|
| `numbers` | `number[]`  | Array de números para calcular a variância.|

## Retorno

| Tipo      | Descrição                                 |
|-----------|--------------------------------------------|
| `number`  | A variância amostral dos valores fornecidos.|

## Exemplo
```typescript
variance([2, 4, 4, 4, 5, 5, 7, 9]); // 4
variance([1, 2, 3, 4, 5]); // 2.5
```

## Notas
- Lança `TypeError` se o argumento não for um array de números.
- Retorna `NaN` para array vazio.
- Utiliza a fórmula da variância amostral.

## Referências
- [Wikipedia: Variância](https://pt.wikipedia.org/wiki/Vari%C3%A2ncia)