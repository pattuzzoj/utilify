# pipe

A função `pipe` compõe uma sequência de funções que processam um valor em ordem. Ela recebe um valor inicial e aplica cada função na sequência, passando o resultado de uma para a próxima.

## Sintaxe

```typescript
function pipe<T>(...callbacks: ((value: T) => T)[]): (value: T) => T;
```

### Parâmetros

| Nome          | Tipo                          | Descrição                                                       |
|---------------|-------------------------------|-----------------------------------------------------------------|
| `...callbacks` | `((value: T) => T)[]`         | Uma lista de funções a serem aplicadas sequencialmente ao valor.|

### Retorno

| Tipo              | Descrição                                               |
|-------------------|---------------------------------------------------------|
| `(value: T) => T` | Uma função composta que aplica as funções fornecidas.    |

## Exemplos

### Exemplo 1: Transformações Numéricas Simples
```typescript
const somar = (x: number) => x + 2;
const multiplicar = (x: number) => x * 3;

const transformar = pipe(somar, multiplicar);

console.log(transformar(5)); // Saída: 21
```

- O valor inicial `5` é passado pela função `somar`, resultando em `7`.
- Em seguida, `7` é passado pela função `multiplicar`, resultando em `21`.

### Exemplo 2: Transformações de String
```typescript
const paraMaiusculas = (s: string) => s.toUpperCase();
const adicionarExclamacao = (s: string) => `${s}!`;

const gritar = pipe(paraMaiusculas, adicionarExclamacao);

console.log(gritar("olá")); // Saída: "OLÁ!"
```

- A string `"olá"` é primeiro convertida para maiúsculas e depois recebe `"!"` no final.

## Notas

- `pipe` processa as funções da esquerda para a direita, tornando a ordem das operações clara.
- Se nenhuma função for passada, a função retornada apenas devolve o valor de entrada sem alterações.

## Código Fonte

::: code-group
```typescript
function pipe<T>(...callbacks: ((value: T) => T)[]): (value: T) => T {
  return (value: T): T => callbacks.reduce((currentValue, callback) => callback(currentValue), value);
}
```

```javascript
function pipe(...callbacks) {
  return (value) => callbacks.reduce((currentValue, callback) => callback(currentValue), value);
}
```
:::

## Referências

- [Array.prototype.reduce()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)