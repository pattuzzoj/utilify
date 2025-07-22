# mean

Calcula a média aritmética de um array de números.

## Sintaxe
```typescript
mean(values: number[]): number
```

## Parâmetros

| Nome   | Tipo        | Descrição           |
|--------|-------------|---------------------|
| `arr`  | `number[]`  | Array de números.   |

## Retorno

| Tipo      | Descrição            |
|-----------|----------------------|
| `number`  | Média dos valores.   | Retorna 0 se o array estiver vazio.

## Exemplo
```typescript
mean([1, 2, 3, 4]); // 2.5
mean([]); // 0
```

## Notas
- Lança `TypeError` se o argumento não for array de números.
- Utiliza a função `add` para somar os valores.

## Referências
- [MDN: Média aritmética](https://developer.mozilla.org/pt-BR/docs/Glossary/Arithmetic_mean)