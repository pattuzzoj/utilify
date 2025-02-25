# isEqual
A função `isEqual` compara dois valores para verificar se são iguais utilizando `Object.is`.

## Sintaxe

```typescript
isEqual(value1: any, value2: any): boolean;
```

### Parâmetros

| Parâmetro  | Tipo     | Descrição                                                          |
|------------|----------|--------------------------------------------------------------------|
| `value1`   | `any`    | O primeiro valor a ser comparado.                                  |
| `value2`   | `any`    | O segundo valor a ser comparado.                                   |

### Retorno

| Tipo     | Descrição                                                          |
|----------|--------------------------------------------------------------------|
| `boolean`| `true` se os valores forem iguais, caso contrário, `false`.         |

## Exemplos

### Exemplo 1: Comparando valores primitivos
```typescript
console.log(isEqual(10, 10));  // true
console.log(isEqual(10, 20));  // false
```

### Exemplo 2: Comparando objetos (mesas referências)
```typescript
const obj1 = { name: 'Alice' };
const obj2 = obj1;

console.log(isEqual(obj1, obj2));  // true
```

### Exemplo 3: Comparando objetos (referências diferentes)
```typescript
const obj1 = { name: 'Alice' };
const obj2 = { name: 'Alice' };

console.log(isEqual(obj1, obj2));  // false
```

## Notas
- Esta função utiliza `Object.is`, que é mais confiável do que o uso de `===` para comparação estrita, pois lida com casos especiais, como `NaN` e `-0` vs `+0`.
- `Object.is` retorna `true` apenas quando ambos os valores são estritamente iguais, considerando até diferenças de sinal (por exemplo, `-0` vs `+0`).

## Dependências
- Nenhuma.

## Código Fonte
::: code-group

```typescript
function isEqual(value1: any, value2: any): boolean {
	return Object.is(value1, value2);
}
```

```javascript
function isEqual(value1, value2) {
  return Object.is(value1, value2);
}
```
:::

## Referências
- [Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)