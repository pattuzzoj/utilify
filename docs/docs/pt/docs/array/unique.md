# unique

A função `unique` retorna um novo array contendo apenas elementos únicos do array de entrada.

## Sintaxe

```typescript
function unique<T>(arr: T[]): T[];
```

### Parâmetros

| Nome  | Tipo   | Descrição                                      |
|-------|--------|--------------------------------------------------|
| `arr` | `T[]`  | O array do qual remover as duplicatas.           |

### Retorno

| Tipo   | Descrição                                           |
|--------|-------------------------------------------------------|
| `T[]`  | Um novo array contendo apenas elementos únicos.       |

## Exemplos

```typescript
console.log(unique([1, 2, 2, 3, 3, 4]));        // [1, 2, 3, 4]
console.log(unique(['a', 'b', 'a', 'c']));      // ['a', 'b', 'c']
console.log(unique([true, true, false]));       // [true, false]
```

## Observações

- Usa `Set` para remover duplicatas eficientemente
- A ordem dos elementos é preservada com base na primeira aparição
- Retorna um novo array; não modifica o array de entrada
- Funciona com qualquer tipo de elementos de array que possam ser armazenados em um Set

## Código Fonte

::: code-group
```typescript
function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
```

```javascript
function unique(arr) {
  return [...new Set(arr)];
}
```
:::

## Referências

- [Set - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Sintaxe de espalhamento - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax)