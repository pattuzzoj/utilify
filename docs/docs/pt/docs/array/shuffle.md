# shuffle

A função `shuffle` embaralha os elementos de um array de forma aleatória.

## Sintaxe

```typescript
shuffle<T>(array: T[]): T[];
```

### Parâmetros

| Nome     | Tipo    | Descrição           |
|----------|---------|---------------------|
| `array`  | `T[]`   | Array de origem     |

### Retorno

| Tipo    | Descrição              |
|---------|------------------------|
| `T[]`   | Novo array embaralhado |

## Exemplos

```typescript
shuffle([1, 2, 3, 4]); // => [3, 1, 4, 2] (exemplo)
```

## Notas

* O array original pode ser modificado.
* Útil para sorteios e randomização de listas.

## Referências

* https://lodash.com/docs/4.17.15#shuffle