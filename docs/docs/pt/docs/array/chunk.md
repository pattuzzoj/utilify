# chunk

A função `chunk` divide um array ou string em partes menores de tamanho fixo.

## Sintaxe

```typescript
chunk(string: string, size: number): string;
chunk<T>(array: T[], size: number): T[][];
```

### Parâmetros

| Nome     | Tipo                | Descrição                      |
|----------|---------------------|--------------------------------|
| `array`  | `T[]` \| `string`   | Array ou string de origem      |
| `size`   | `number`            | Tamanho de cada pedaço         |

### Retorno

| Tipo                | Descrição                      |
|---------------------|--------------------------------|
| `T[][]` \| `string` | Array de pedaços ou string dividida |

## Exemplos

```typescript
chunk([1, 2, 3, 4, 5], 2); // => [[1,2],[3,4],[5]]
chunk("abcdef", 3); // => ["abc", "def"]
```

## Notas

* Se o tamanho não for positivo, lança um erro.
* Útil para dividir dados em blocos menores.

## Referências

* https://lodash.com/docs/4.17.15#chunk