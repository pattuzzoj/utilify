# isOdd

A função `isOdd` verifica se um número é ímpar. Ela retorna `true` se o número não for divisível por 2 (ou seja, o resto da divisão for diferente de zero), e `false` caso contrário.

## Sintaxe

```typescript
function isOdd(value: number): boolean
```

### Parâmetros

| Nome  | Tipo     | Descrição                                      |
|-------|----------|------------------------------------------------|
| value | `number` | O número a ser verificado se é ímpar.          |

### Retorno

| Tipo    | Descrição                                       |
|---------|-------------------------------------------------|
| `boolean` | `true` se o número for ímpar, `false` caso contrário. |

## Exemplos

```typescript
console.log(isOdd(3));  // Saída: true
console.log(isOdd(4));  // Saída: false
console.log(isOdd(0));  // Saída: false
```

## Notas

- A função utiliza o operador de módulo (`%`) para verificar se o número não é divisível por 2 sem deixar resto.
- A entrada deve ser um número inteiro.

## Código Fonte

::: code-group
```typescript
function isOdd(value: number): boolean {
  return value % 2 !== 0;
}
```

```javascript
function isOdd(value) {
  return value % 2 !== 0;
}
```
::: 

## Referências

- [Operador de Módulo](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Modulo)