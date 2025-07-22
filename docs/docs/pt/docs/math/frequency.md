# frequency

Conta a frequência de cada elemento em um array, retornando um objeto com as ocorrências.

## Sintaxe
```typescript
frequency(arr: any[]): Record<PropertyKey, number>
```

## Parâmetros

| Nome   | Tipo      | Descrição            |
|--------|-----------|----------------------|
| `arr`  | `any[]`   | Array de elementos a serem contados.  |

## Retorno

| Tipo                    | Descrição                              |
|-------------------------|----------------------------------------|
| `Record<PropertyKey, number>`| Objeto onde as chaves são os elementos do array (convertidos em string) e os valores são as contagens. |

## Exemplo
```typescript
frequency(['a', 'b', 'a', 'c', 'b', 'a']); // { a: 3, b: 2, c: 1 }
frequency([1, 2, 2, 3]); // { '1': 1, '2': 2, '3': 1 }
```

## Notas
- Lança `TypeError` se o argumento não for array.
- Útil para análise de dados e estatísticas simples.

## Referências
- [MDN: Array.prototype.reduce()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)