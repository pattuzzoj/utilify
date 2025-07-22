# last

A função `last` retorna o(s) último(s) elemento(s) de um array ou caractere(s) de uma string.

## Sintaxe

```typescript
last(string: string, count?: number): string;
last<T>(array: T[], count?: number): T[];
```

### Parâmetros

| Nome      | Tipo                | Descrição                                                        |
|-----------|---------------------|------------------------------------------------------------------|
| `array`   | `T[]` \| `string`   | Array ou string de origem                                        |
| `count`   | `number`            | Quantidade de elementos/caracteres a retornar (opcional, padrão 1) |

### Retorno

| Tipo                | Descrição                      |
|---------------------|--------------------------------|
| `T[]` \| `string`   | Últimos elementos ou caracteres |

## Exemplos

```typescript
last([1, 2, 3, 4], 2); // => [3, 4]
last('abcdef', 3); // => 'def'
last([1, 2, 3]); // => [3]
```

## Notas

* Se `count` for maior que o tamanho do array/string, retorna todos os elementos.
* Retorna um array ou string vazio se o array/string for vazio.

## Referências

* https://lodash.com/docs/4.17.15#last