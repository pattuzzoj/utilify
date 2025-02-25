# union

A função `union` combina múltiplos arrays e retorna um novo array com elementos únicos.

## Sintaxe

```typescript
function union<T>(...arrs: T[][]): T[];
```

### Parâmetros

| Nome   | Tipo     | Descrição                                              |
|--------|----------|--------------------------------------------------------|
| `arrs` | `T[][]`  | Dois ou mais arrays para combinar.                     |

### Retorno

| Tipo   | Descrição                                              |
|--------|--------------------------------------------------------|
| `T[]`  | Um novo array contendo elementos únicos de todos os arrays de entrada. |

## Exemplos

```typescript
console.log(union([1, 2], [2, 3]));             // [1, 2, 3]
console.log(union([1, 2], [3, 4], [4, 5]));     // [1, 2, 3, 4, 5]
console.log(union(['a', 'b'], ['b', 'c']));     // ['a', 'b', 'c']
```

## Observações

- Duplicatas são removidas do resultado final
- A ordem dos elementos é preservada com base na primeira aparição
- Usa a função `unique` internamente para remover duplicatas
- Retorna um novo array; não modifica os arrays de entrada

## Código Fonte

::: code-group
```typescript
import unique from './unique';

function union<T>(...arrs: T[][]): T[] {
  return unique(arrs.reduce((unionArr, arr) => [...unionArr, ...arr], []));
}
```

```javascript
function union(...arrs) {
  return unique(arrs.reduce((unionArr, arr) => [...unionArr, ...arr], []));
}
```
:::

## Referências

- [Array.prototype.reduce() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Sintaxe de espalhamento - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax)