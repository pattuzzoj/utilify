# before

A função `before` retorna todos os elementos de um array ou caracteres de uma string antes do índice especificado.

## Sintaxe

```typescript
before(string: string, index: number): string;
before<T>(array: T[], index: number): T[];
```

### Parâmetros

| Nome     | Tipo                | Descrição                                 |
|----------|---------------------|-------------------------------------------|
| `array`  | `T[]` \| `string`   | Array ou string de origem                 |
| `index`  | `number`            | Índice antes do qual os elementos são retornados |

### Retorno

| Tipo                | Descrição                                 |
|---------------------|-------------------------------------------|
| `T[]` \| `string`   | Elementos ou caracteres antes do índice   |

## Exemplos

```typescript
before([1, 2, 3, 4], 2); // => [1, 2]
before("abcdef", 3); // => "abc"
```

## Notas

* O índice é baseado em zero.
* Retorna um array ou string vazio se o índice for 0.

## Referências

* https://lodash.com/docs/4.17.15#take