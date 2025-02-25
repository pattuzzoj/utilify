# convertTimeUnit  
Converte uma quantidade de tempo de uma unidade para outra.

## Sintaxe
```typescript
convertTimeUnit(time: number, from: TimeUnit, to: TimeUnit): number
```

### Parâmetros

| Parâmetro | Tipo                     | Descrição                                                     |
|-----------|--------------------------|----------------------------------------------------------------|
| `time`    | `number`                 | O valor de tempo a ser convertido.                            |
| `from`    | `"milliseconds" \| "seconds" \| "minutes" \| "hours" \| "days"` | A unidade original do valor de tempo.                        |
| `to`      | `"milliseconds" \| "seconds" \| "minutes" \| "hours" \| "days"` | A unidade desejada para o valor convertido.                  |

### Retorno

| Tipo     | Descrição                                                       |
|----------|------------------------------------------------------------------|
| `number` | O valor convertido para a unidade de tempo especificada.         |

## Exemplos

### Exemplo 1: Converter segundos para minutos
```typescript
convertTimeUnit(120, "seconds", "minutes");
// Saída: 2
```

### Exemplo 2: Converter horas para milissegundos
```typescript
convertTimeUnit(1, "hours", "milliseconds");
// Saída: 3600000
```

### Exemplo 3: Converter dias para horas
```typescript
convertTimeUnit(2, "days", "hours");
// Saída: 48
```

### Exemplo 4: Converter minutos para milissegundos
```typescript
convertTimeUnit(5, "minutes", "milliseconds");
// Saída: 300000
```

### Exemplo 5: Converter milissegundos para dias
```typescript
convertTimeUnit(86400000, "milliseconds", "days");
// Saída: 1
```

## Notas
- Os valores são convertidos para milissegundos como etapa intermediária.
- O resultado é arredondado para baixo usando `Math.floor` para evitar valores decimais.

## Código Fonte
::: code-group

```typescript
type TimeUnit = "milliseconds" | "seconds" | "minutes" | "hours" | "days";

function convertTimeUnit(time: number, from: TimeUnit, to: TimeUnit): number {
  const conversionFactors: Record<TimeUnit, number> = {
    milliseconds: 1,
    seconds: 1000,
    minutes: 60 * 1000,
    hours: 60 * 60 * 1000,
    days: 24 * 60 * 60 * 1000
  };

  const timeInMilliseconds = time * conversionFactors[from];
  return Math.floor(timeInMilliseconds / conversionFactors[to]);
}
```

```javascript
function convertTimeUnit(time, from, to) {
  const conversionFactors = {
    milliseconds: 1,
    seconds: 1000,
    minutes: 60 * 1000,
    hours: 60 * 60 * 1000,
    days: 24 * 60 * 60 * 1000
  };

  const timeInMilliseconds = time * conversionFactors[from];
  return Math.floor(timeInMilliseconds / conversionFactors[to]);
}
```
:::

## Referências
- [MDN: `Math.floor`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)