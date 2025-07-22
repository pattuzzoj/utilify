# count

A função `count` retorna o número de elementos em um array ou caracteres em uma string.

## Sintaxe

```typescript
count(array: any[] | string): number;
```

### Parâmetros

| Nome     | Tipo              | Descrição                |
|----------|-------------------|--------------------------|
| `array`  | `any[]` \| `string` | Array ou string de origem |

### Retorno

| Tipo      | Descrição                        |
|-----------|----------------------------------|
| `number`  | Quantidade de elementos ou caracteres |

## Exemplos

```typescript
count([1, 2, 3]); // => 3
count("abc"); // => 3
count([]); // => 0
```

## Notas

* Retorna 0 para arrays ou strings vazias.
* Útil para validação de tamanho.

## Referências

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length