# compact

A função `compact` remove todos os valores falsy de um array. Valores falsy incluem `false`, `0`, `""`, `null`, `undefined` e `NaN`. Isso é útil quando você precisa limpar um array, removendo valores indesejados ou vazios.

## Sintaxe

```typescript
function compact<T>(arr: T[]): T[];
```

### Parâmetros

| Nome   | Tipo         | Descrição                                                        |
|--------|--------------|--------------------------------------------------------------------|
| `arr`  | `T[]`        | O array original do qual os valores falsy serão removidos.         |

### Retorno

| Tipo    | Descrição                                                                   |
|---------|-------------------------------------------------------------------------------|
| `T[]`   | Um novo array com todos os valores falsy removidos.                           |

## Exemplos

```typescript
import compact from './compact';

const data = [0, 1, false, 2, "", 3, null, undefined, NaN, 4];

// Removendo valores falsy
console.log(compact(data)); // [1, 2, 3, 4]
```

## Observações

- Valores falsy em JavaScript incluem: `false`, `0`, `""` (string vazia), `null`, `undefined` e `NaN`.
- A função usa o utilitário `isFalsy` da biblioteca `@utilify/types` para determinar se um valor é falsy.
- O array original não é modificado; um novo array é retornado.

## Código Fonte

::: code-group
```typescript
import { isFalsy } from "@utilify/types";

function compact<T>(arr: T[]): T[] {
  return arr.filter((value: T) => !isFalsy(value));
}
```

```javascript
import { isFalsy } from "@utilify/types";

function compact(arr) {
  return arr.filter((value) => !isFalsy(value));
}
```
:::

## Referências

- [Valores Falsy em JavaScript - MDN](https://developer.mozilla.org/pt-BR/docs/Glossary/Falsy)
- [Array.prototype.filter() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)