# isBetween

A função `isBetween` verifica se um número dado está entre dois outros números (inclusive). Ela retorna `true` se o valor estiver dentro do intervalo, incluindo os limites, e `false` caso contrário.

## Sintaxe

```typescript
function isBetween(value: number, min: number, max: number): boolean
```

### Parâmetros

| Nome  | Tipo     | Descrição                                          |
|-------|----------|----------------------------------------------------|
| value | `number` | O número a ser verificado se está entre `min` e `max`. |
| min   | `number` | O valor mínimo do intervalo.                       |
| max   | `number` | O valor máximo do intervalo.                       |

### Retorno

| Tipo    | Descrição                                       |
|---------|-------------------------------------------------|
| `boolean` | `true` se o valor estiver entre `min` e `max` (inclusive), `false` caso contrário. |

## Exemplos

```typescript
console.log(isBetween(5, 1, 10));  // Saída: true
console.log(isBetween(0, 1, 10));  // Saída: false
console.log(isBetween(10, 10, 10)); // Saída: true
```

## Notas

- A função verifica se o valor está inclusivamente dentro do intervalo definido por `min` e `max`.
- A ordem de `min` e `max` não importa, pois a comparação é feita de maneira que funciona independentemente da ordem.

## Código Fonte

::: code-group
```typescript
function isBetween(value: number, min: number, max: number): boolean {
  return min <= value && value <= max;
}
```

```javascript
function isBetween(value, min, max) {
  return min <= value && value <= max;
}
```
::: 

## Referências

- [Operadores de Comparação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Comparison)