# round

A função `round` arredonda um número para um número especificado de casas decimais (precisão). Ela utiliza truncamento para efetivamente arredondar para baixo até a precisão desejada.

## Sintaxe

```typescript
function round(value: number, precision: number): number
```

### Parâmetros

| Nome      | Tipo     | Descrição                                          |
|-----------|----------|----------------------------------------------------|
| value     | `number` | O número a ser arredondado.                        |
| precision | `number` | O número de casas decimais para arredondar.       |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `number` | O número arredondado para a precisão especificada. |

## Exemplos

```typescript
console.log(round(3.14159, 2));  // Saída: 3.14
console.log(round(5.6789, 3));   // Saída: 5.678
console.log(round(123.456, 0));  // Saída: 123
```

## Notas

- A função utiliza `Math.trunc()` para remover a parte decimal do número após ajustar para a precisão especificada, multiplicando pelo valor de `10^precisão`.
- O valor é então dividido pelo mesmo fator para restaurar a escala original com a precisão desejada.

## Código Fonte

::: code-group
```typescript
function round(value: number, precision: number) {
  const factor = 10 ** precision;
  return Math.trunc(value * factor) / factor;
}
```

```javascript
function round(value, precision) {
  const factor = 10 ** precision;
  return Math.trunc(value * factor) / factor;
}
```
::: 

## Referências

- [Math.trunc()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)