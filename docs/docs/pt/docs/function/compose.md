# compose

A função `compose` recebe uma sequência de funções e retorna uma nova função que aplica as funções recebidas de forma acumulada, da última para a primeira (da direita para a esquerda).

## Sintaxe

```typescript
function compose<T>(...callbacks: ((value: T) => T)[]): (value: T) => T;
```

### Parâmetros

| Nome        | Tipo                      | Descrição                                 |
|-------------|---------------------------|-------------------------------------------|
| `callbacks` | `((value: T) => T)[]`      | Um array de funções que serão compostas.  |

### Retorno

| Tipo         | Descrição                                      |
|--------------|------------------------------------------------|
| `(value: T) => T` | Uma função que aplica as funções passadas da direita para a esquerda. |

## Exemplos

### Exemplo 1: Compondo funções simples

```typescript
const add1 = (x: number): number => x + 1;
const multiply2 = (x: number): number => x * 2;

const add1ThenMultiply2 = compose(multiply2, add1);

console.log(add1ThenMultiply2(5)); // Saída: 12 (5 + 1 = 6, 6 * 2 = 12)
```

### Exemplo 2: Compondo várias funções

```typescript
const subtract3 = (x: number): number => x - 3;
const divideBy2 = (x: number): number => x / 2;

const result = compose(divideBy2, subtract3, add1)(10);
console.log(result); // Saída: 3.5 (10 + 1 = 11, 11 - 3 = 8, 8 / 2 = 3.5)
```

## Notas

- A composição de funções é um padrão de programação funcional.
- A função mais à direita é aplicada primeiro, e a mais à esquerda é a última a ser aplicada.
- O `compose` é útil para encadear transformações de dados de forma declarativa e clara.

## Código Fonte

::: code-group
```typescript
function compose<T>(...callbacks: ((value: T) => T)[]): (value: T) => T {
  return (value: T): T => callbacks.reduceRight((currentValue, callback) => callback(currentValue), value);
}
```

```javascript
function compose(...callbacks) {
  return (value) => callbacks.reduceRight((currentValue, callback) => callback(currentValue), value);
}
```
:::

## Referências

- [Array.prototype.reduceRight](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)