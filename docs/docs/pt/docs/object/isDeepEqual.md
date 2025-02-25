# isDeepEqual
A função `isDeepEqual` compara dois valores de forma recursiva para verificar se são profundamente iguais, considerando tanto os valores primitivos quanto objetos e arrays aninhados.

## Sintaxe

```typescript
isDeepEqual(value1: Record<string, any>, value2: Record<string, any>): boolean;
isDeepEqual(value1: any[], value2: any[]): boolean;
isDeepEqual(value1: any, value2: any): boolean;
```

### Parâmetros

| Parâmetro  | Tipo                           | Descrição                                                          |
|------------|--------------------------------|--------------------------------------------------------------------|
| `value1`   | `Record<string, any> \| any[]`  | O primeiro valor a ser comparado. Pode ser um objeto ou array.     |
| `value2`   | `Record<string, any> \| any[]`  | O segundo valor a ser comparado. Pode ser um objeto ou array.     |

### Retorno

| Tipo     | Descrição                                                          |
|----------|--------------------------------------------------------------------|
| `boolean`| `true` se os valores forem profundamente iguais, caso contrário, `false`. |

## Exemplos

### Exemplo 1: Comparando objetos planos
```typescript
const obj1 = { name: 'Alice', age: 30 };
const obj2 = { name: 'Alice', age: 30 };

console.log(isDeepEqual(obj1, obj2));  // true
```

### Exemplo 2: Comparando objetos com valores diferentes
```typescript
const obj1 = { name: 'Alice', age: 30 };
const obj2 = { name: 'Bob', age: 30 };

console.log(isDeepEqual(obj1, obj2));  // false
```

### Exemplo 3: Comparando objetos aninhados
```typescript
const obj1 = { name: 'Alice', address: { city: 'Wonderland', zip: '1234' } };
const obj2 = { name: 'Alice', address: { city: 'Wonderland', zip: '1234' } };

console.log(isDeepEqual(obj1, obj2));  // true
```

### Exemplo 4: Comparando arrays
```typescript
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(isDeepEqual(arr1, arr2));  // true
```

### Exemplo 5: Comparando arrays com objetos aninhados
```typescript
const arr1 = [{ name: 'Alice' }, { age: 30 }];
const arr2 = [{ name: 'Alice' }, { age: 30 }];

console.log(isDeepEqual(arr1, arr2));  // true
```

## Notas
- A função realiza uma comparação profunda de objetos e arrays, verificando recursivamente todas as propriedades e valores.
- Para valores primitivos, utiliza `Object.is` para garantir uma comparação precisa, incluindo o tratamento especial de valores como `NaN` e `-0` vs `+0`.

## Dependências
- Nenhuma.

## Código Fonte
::: code-group

```typescript
function isDeepEqual(value1: Record<string, any>, value2: Record<string, any>): boolean;
function isDeepEqual(value1: any[], value2: any[]): boolean;
function isDeepEqual(value1: any, value2: any): boolean {
  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }

    if (typeof value1[key] !== typeof value2[key]) return false;

    if (value1[key] !== null && typeof value1[key] === "object") {
      if(!isDeepEqual(value1[key], value2[key])) {
        return false;
      }
    } else if (!Object.is(value1[key], value2[key])) {
      return false;
    }
  }

  return true;
}
```

```javascript
function isDeepEqual(value1, value2) {
  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }

    if (typeof value1[key] !== typeof value2[key]) return false;

    if (value1[key] !== null && typeof value1[key] === "object") {
      if(!isDeepEqual(value1[key], value2[key])) {
        return false;
      }
    } else if (!Object.is(value1[key], value2[key])) {
      return false;
    }
  }

  return true;
}
```
:::

## Referências
- [Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)