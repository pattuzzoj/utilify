# clamp

A função `clamp` restringe um número a um intervalo especificado. Se o valor exceder o limite máximo, ela retorna o valor máximo. Se o valor estiver abaixo do limite mínimo, ela retorna o valor mínimo. Caso contrário, retorna o valor original.

## Sintaxe

```typescript
function clamp(value: number, min: number, max: number): number
```

### Parâmetros

| Nome  | Tipo     | Descrição                           |
|-------|----------|-------------------------------------|
| value | `number` | O número a ser restringido.         |
| min   | `number` | O valor mínimo permitido.           |
| max   | `number` | O valor máximo permitido.           |

### Retorno

| Tipo    | Descrição                                        |
|---------|--------------------------------------------------|
| `number`| O valor restringido, limitado ao intervalo dado.|

## Exemplos

```typescript
console.log(clamp(5, 1, 10));  // Saída: 5 (dentro do intervalo)
console.log(clamp(-3, 1, 10)); // Saída: 1 (abaixo do intervalo, limitado ao mínimo)
console.log(clamp(15, 1, 10)); // Saída: 10 (acima do intervalo, limitado ao máximo)
```

## Notas

- A função assume que `min` é menor ou igual a `max`. Se essa condição for violada, o comportamento pode ser imprevisível.
- Útil para garantir que valores permaneçam dentro de limites seguros ou esperados.

## Código Fonte

::: code-group
```typescript
function clamp(value: number, min: number, max: number): number {
  if (value >= max) {
    return max;
  } else if (value <= min) {
    return min;
  }

  return value;
}
```

```javascript
function clamp(value, min, max) {
  if (value >= max) {
    return max;
  } else if (value <= min) {
    return min;
  }

  return value;
}
```
::: 

## Referências

- [Operadores de Comparação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)