# isInteger

A função `isInteger` verifica se um valor dado é um número inteiro. Ela retorna `true` se o valor for um número inteiro e `false` caso contrário.

## Sintaxe

```typescript
function isInteger(value: number): boolean
```

### Parâmetros

| Nome  | Tipo     | Descrição                                      |
|-------|----------|------------------------------------------------|
| value | `number` | O valor a ser verificado se é um número inteiro. |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `boolean` | `true` se o valor for um número inteiro, `false` caso contrário. |

## Exemplos

```typescript
console.log(isInteger(4));     // Saída: true
console.log(isInteger(4.5));   // Saída: false
console.log(isInteger(-3));    // Saída: true
```

## Notas

- A função utiliza `Number.isInteger()` para determinar se o valor é um número inteiro.
- A função retorna `false` para números não inteiros (por exemplo, números de ponto flutuante) e valores não numéricos.

## Código Fonte

::: code-group
```typescript
function isInteger(value: number): boolean {
  return Number.isInteger(value);
}
```

```javascript
function isInteger(value) {
  return Number.isInteger(value);
}
```
::: 

## Referências

- [Number.isInteger()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)