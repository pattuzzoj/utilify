# isTruthy  
Verifica se o valor fornecido é considerado "verdadeiro" em um contexto booleano, ou seja, se não for um valor "falsy". Para isso, a função utiliza a função `isFalsy` para identificar se o valor é "falsy" e retorna o oposto disso.

## Sintaxe
```typescript
function isTruthy(value: any): boolean
```

### Parâmetros

| Parâmetro | Tipo       | Descrição                                 |
|-----------|------------|-------------------------------------------|
| `value`   | `any`  | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                   |
|----------|---------------------------------------------|
| `boolean`| Retorna `true` se o valor não for "falsy", caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando valores "truthy"
```typescript
isTruthy("Hello"); // true
isTruthy(42); // true
isTruthy([]); // true
isTruthy({}); // true
```

### Exemplo 2: Verificando valores "falsy"
```typescript
isTruthy(null); // false
isTruthy(undefined); // false
isTruthy(0); // false
isTruthy(""); // false
```

## Notas
- A função `isTruthy` é basicamente uma inversão da função `isFalsy`, ou seja, retorna `true` para todos os valores que são avaliados como "truthy" em JavaScript, e `false` para os valores "falsy".
- A função depende de uma implementação prévia de `isFalsy`, que lida com a verificação dos valores "falsy".

## Dependências
[`isFalsy`](./isFalsy.md) ([`@utilify/boolean`](./)): Verifica se um valor é "falsy".

## Código Fonte
::: code-group

```typescript
import isFalsy from "./isFalsy";

function isTruthy(value: any): boolean {
  return !isFalsy(value);
}
```

```javascript
import isFalsy from "./isFalsy";

function isTruthy(value) {
  return !isFalsy(value);
}
```
:::

## Referências
- [MDN: Falsy values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#making_comparisons)