# getType

A função `getType` retorna uma string representando o tipo do valor fornecido, incluindo casos especiais como "nan", "infinity", "null" e "array".

## Sintaxe

```typescript
getType(value: any): string;
```

### Parâmetros

| Nome    | Tipo    | Descrição                        |
|---------|---------|----------------------------------|
| `value` | `any`   | Valor a ser inspecionado         |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `string`  | Tipo do valor (ex: "string", "array", "nan") |

## Exemplos

```typescript
getType([]); // => "array"
getType(null); // => "null"
getType(NaN); // => "nan"
getType(Infinity); // => "infinity"
getType(123); // => "number"
```

## Notas

* Útil para identificar tipos de valores, inclusive casos especiais.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures#tipos_de_dados