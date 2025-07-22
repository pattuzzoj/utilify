# cycle

A função `cycle` repete os elementos de um array ou caracteres de uma string um número especificado de vezes.

## Sintaxe

```typescript
cycle<T>(array: T[], times: number): T[];
cycle(string: string, times: number): string;
```

### Parâmetros

| Nome      | Tipo                | Descrição                  |
|-----------|---------------------|----------------------------|
| `array`   | `T[]` \| `string`   | Array ou string de origem  |
| `times`   | `number`            | Número de repetições       |

### Retorno

| Tipo                | Descrição                  |
|---------------------|----------------------------|
| `T[]` \| `string`   | Novo array ou string repetido |

## Exemplos

```typescript
cycle([1, 2], 3); // => [1,2,1,2,1,2]
cycle("ab", 2); // => "abab"
```

## Notas

* Se times for 0 ou negativo, retorna um array ou string vazio.
* Não modifica o array ou string original.

## Referências

* https://lodash.com/docs/4.17.15#repeat
