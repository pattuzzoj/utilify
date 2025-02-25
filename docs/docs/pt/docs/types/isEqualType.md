# isEqualType  
Compara o tipo de dois valores, retornando `true` se ambos os valores forem do mesmo tipo e `false` caso contrário. A função utiliza `getType` para obter o tipo de cada valor e faz a comparação.

## Sintaxe
```typescript
function isEqualType(value1: any, value2: any): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value1`  | `any`     | O primeiro valor a ser comparado.       |
| `value2`  | `any`     | O segundo valor a ser comparado.        |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se ambos os valores forem do mesmo tipo, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Comparando tipos de valores simples
```typescript
isEqualType(42, 56); // true (ambos são números)
isEqualType("Hello", "World"); // true (ambos são strings)
isEqualType(42, "Hello"); // false (um é número, o outro é string)
```

### Exemplo 2: Comparando tipos complexos
```typescript
isEqualType([], {}); // false (um é array, o outro é objeto simples)
isEqualType(new Map(), new Set()); // false (um é Map, o outro é Set)
isEqualType(new Date(), new Date()); // true (ambos são instâncias de Date)
```

### Exemplo 3: Comparando tipos de valores especiais
```typescript
isEqualType(NaN, NaN); // true (ambos são NaN)
isEqualType(Infinity, -Infinity); // true (ambos são Infinity)
```

## Notas
- A função utiliza `getType` para identificar o tipo de cada valor antes de compará-los.
- A comparação de tipos é feita de maneira estrita, ou seja, mesmo que os valores sejam de tipos semelhantes (como arrays e objetos), eles serão considerados diferentes se o tipo não for exatamente o mesmo.

## Dependências
[getType](./getType.md): Utilizada para obter o tipo dos valores a serem comparados.

## Código Fonte
::: code-group

```typescript
import getType from "./getType";

function isEqualType(value1: any, value2: any): boolean {
  return getType(value1) === getType(value2);
}
```

```javascript
import getType from "./getType";

function isEqualType(value1, value2) {
  return getType(value1) === getType(value2);
}
```
:::

## Referências
- [MDN: `Object.prototype.toString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
- [MDN: `NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
- [MDN: `Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)