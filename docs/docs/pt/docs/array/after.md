# after

A função `after` retorna todos os elementos de um array ou caracteres de uma string após o índice especificado.

## Sintaxe

```typescript
after(string: string, index: number): string;
after<T>(array: T[], index: number): T[];
```

### Parâmetros

| Nome     | Tipo                | Descrição                                 |
|----------|---------------------|-------------------------------------------|
| `array`  | `T[]` \| `string`   | Array ou string de origem                 |
| `index`  | `number`            | Índice após o qual os elementos são retornados |

### Retorno

| Tipo                | Descrição                                 |
|---------------------|-------------------------------------------|
| `T[]` \| `string`   | Elementos ou caracteres após o índice     |

## Exemplos

```typescript
after([1, 2, 3, 4], 1); // => [3, 4]
after("abcdef", 2); // => "def"
```

## Notas

* O índice é baseado em zero.
* Retorna um array ou string vazio se o índice for o último elemento.

## Referências

* https://lodash.com/docs/4.17.15#drop