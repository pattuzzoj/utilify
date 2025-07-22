# repeat

A função `repeat` cria um novo array ou string repetindo o valor informado um número específico de vezes.

## Sintaxe

```typescript
repeat<T>(value: T, count: number): T[];
repeat(value: string, count: number): string;
```

### Parâmetros

| Nome      | Tipo                | Descrição                      |
|-----------|---------------------|-------------------------------|
| `value`   | `T` \| `string`      | Valor ou string a ser repetido |
| `count`   | `number`            | Número de repetições           |

### Retorno

| Tipo                | Descrição                      |
|---------------------|-------------------------------|
| `T[]` \| `string`   | Novo array ou string repetido |

## Exemplos

```typescript
repeat(1, 3); // => [1, 1, 1]
repeat('a', 4); // => 'aaaa'
repeat([2], 2); // => [[2], [2]]
```

## Notas

* Se `count` for 0, retorna um array ou string vazio.
* Lança erro se `count` for negativo.

## Referências

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat