# isEven

A função `isEven` verifica se um número é par. Ela retorna `true` se o número for divisível por 2, ou seja, se o resto da divisão por 2 for igual a zero, e `false` caso contrário.

## Sintaxe

```typescript
function isEven(value: number): boolean
```

### Parâmetros

| Nome  | Tipo     | Descrição                                      |
|-------|----------|------------------------------------------------|
| value | `number` | O número a ser verificado se é par.            |

### Retorno

| Tipo    | Descrição                                       |
|---------|-------------------------------------------------|
| `boolean` | `true` se o número for par, `false` caso contrário. |

## Exemplos

```typescript
console.log(isEven(4));  // Saída: true
console.log(isEven(7));  // Saída: false
console.log(isEven(0));  // Saída: true (0 é considerado par)
```

## Notas

- A função utiliza o operador de módulo (`%`) para verificar se o número é divisível por 2 sem deixar resto.
- A entrada deve ser um número inteiro.

## Código Fonte

::: code-group
```typescript
function isEven(value: number): boolean {
  return value % 2 === 0;
}
```

```javascript
function isEven(value) {
  return value % 2 === 0;
}
```
::: 

## Referências

- [Operador de Módulo](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Modulo)