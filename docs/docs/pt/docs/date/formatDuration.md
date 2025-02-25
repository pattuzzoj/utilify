# formatDuration
A função `formatDuration` formata uma duração fornecida em milissegundos em uma string legível, com base no formato especificado.

## Sintaxe

```typescript
formatDuration(ms: number, format: string = "hh:mm:ss", autoHour: boolean = true): string
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                                                             |
|-----------|----------|-----------------------------------------------------------------------|
| `ms`      | `number` | A duração em milissegundos a ser formatada.                           |
| `format`  | `string` | A string de formato para a saída. O valor padrão é `"hh:mm:ss"`.      |
| `autoHour`| `boolean`| Se `true`, a parte das horas será omitida caso a duração seja menor que uma hora. O valor padrão é `true`. |

### Retorno

| Tipo     | Descrição                                                             |
|----------|-----------------------------------------------------------------------|
| `string` | Uma string formatada representando a duração, com base no formato.    |

## Exemplos

### Exemplo 1: Formato padrão
```typescript
console.log(formatDuration(3661000)); // "01:01:01"
```

### Exemplo 2: Formato customizado (horas e minutos)
```typescript
console.log(formatDuration(3661000, "hh:mm:ss")); // "01:01:01"
```

### Exemplo 3: Formato customizado sem horas
```typescript
console.log(formatDuration(61000, "mm:ss")); // "01:01"
```

### Exemplo 4: Com milissegundos
```typescript
console.log(formatDuration(3661000, "hh:mm:ss.ms")); // "01:01:01.000"
```

### Exemplo 5: Com remoção automática das horas
```typescript
console.log(formatDuration(61000, "hh:mm:ss", true)); // "01:01"
```

## Notas
- A string de `format` não é sensível a maiúsculas/minúsculas.
- O parâmetro `autoHour`, quando definido como `true`, removerá a parte das horas da saída se a duração for menor que uma hora.

## Dependências
- Nenhuma.

## Código
::: code-group

```typescript
function formatDuration(ms: number, format: string = "hh:mm:ss", autoHour: boolean = true): string {
  const hours = String(Math.floor(ms / 3_600_000));
  const minutes = String(Math.floor((ms % 3_600_000) / 60_000)).padStart(2, "0");
  const seconds = String(Math.floor((ms % 60_000) / 1000)).padStart(2, "0");
  const milliseconds = String(ms % 1000).padStart(3, "0");

  let formatedDuration = format.toLowerCase();

  if (autoHour && hours === "0") {
    formatedDuration = formatedDuration.slice(formatedDuration.indexOf("mm"));
  }

  return formatedDuration
    .replace("hh", hours)
    .replace("mm", minutes)
    .replace("ss", seconds)
    .replace("ms", milliseconds);
}
```

```javascript
function formatDuration(ms, format = "hh:mm:ss", autoHour = true) {
  const hours = String(Math.floor(ms / 3_600_000));
  const minutes = String(Math.floor((ms % 3_600_000) / 60_000)).padStart(2, "0");
  const seconds = String(Math.floor((ms % 60_000) / 1000)).padStart(2, "0");
  const milliseconds = String(ms % 1000).padStart(3, "0");

  let formatedDuration = format.toLowerCase();

  if (autoHour && hours === "0") {
    formatedDuration = formatedDuration.slice(formatedDuration.indexOf("mm"));
  }

  return formatedDuration
    .replace("hh", hours)
    .replace("mm", minutes)
    .replace("ss", seconds)
    .replace("ms", milliseconds);
}
```
:::

## Referências
- [String.prototype.padStart()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)