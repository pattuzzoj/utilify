# compact

A função `compact` remove valores falsy de um array.

## Sintaxe

```typescript
compact<T>(array: T[]): T[];
```

### Parâmetros

| Nome     | Tipo    | Descrição           |
|----------|---------|---------------------|
| `array`  | `T[]`   | Array de origem     |

### Retorno

| Tipo    | Descrição                  |
|---------|----------------------------|
| `T[]`   | Novo array sem valores falsy |

## Exemplos

```typescript
compact([0, 1, false, 2, '', 3]); // => [1, 2, 3]
compact([null, undefined, NaN, 4]); // => [4]
```

## Notas

* Valores falsy incluem: false, 0, "", null, undefined, NaN.
* Não modifica o array original.

## Referências

* https://lodash.com/docs/4.17.15#compact