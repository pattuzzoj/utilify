# includes

A função `includes` verifica se um array ou string contém um determinado valor.

## Sintaxe

```typescript
includes<T>(array: T[] | string, value: T | string, fromIndex?: number): boolean;
```

### Parâmetros

| Nome         | Tipo                      | Descrição                                 |
|--------------|---------------------------|-------------------------------------------|
| `array`      | `T[]` \| `string`         | Array ou string de origem                 |
| `value`      | `T` \| `string`           | Valor a ser procurado                     |
| `fromIndex`  | `number`                  | Índice inicial para busca (opcional)      |

### Retorno

| Tipo       | Descrição                                 |
|------------|-------------------------------------------|
| `boolean`  | Retorna true se o valor for encontrado     |

## Exemplos

```typescript
includes([1, 2, 3], 2); // => true
includes("abc", "b"); // => true
includes([1, 2, 3], 4); // => false
```

## Notas

* Equivalente ao método nativo Array.prototype.includes.
* Útil para buscas rápidas em arrays ou strings.

## Referências

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes