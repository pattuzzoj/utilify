# sample

A função `sample` retorna um elemento aleatório de um array.

## Sintaxe

```typescript
sample<T>(array: T[]): T | undefined;
```

### Parâmetros

| Nome     | Tipo     | Descrição              |
|----------|----------|------------------------|
| `array`  | `T[]`    | Array de origem        |

### Retorno

| Tipo                | Descrição                                 |
|---------------------|-------------------------------------------|
| `T` \| `undefined`  | Elemento aleatório ou undefined se vazio  |

## Exemplos

```typescript
sample([1, 2, 3, 4]); // => 2 (exemplo)
sample([]); // => undefined
```

## Notas

* Retorna undefined se o array estiver vazio.
* Útil para obter amostras aleatórias.

## Referências

* https://lodash.com/docs/4.17.15#sample