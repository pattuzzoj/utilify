# flat

A função `flat` "achata" um array de arrays em um único array até a profundidade especificada.

## Sintaxe

```typescript
flat<T>(array: any[], depth?: number): T[];
```

### Parâmetros

| Nome     | Tipo        | Descrição                                    |
|----------|-------------|-----------------------------------------------|
| `array`  | `any[]`     | Array de origem                              |
| `depth`  | `number`    | Profundidade de achatamento (opcional, padrão 1) |

### Retorno

| Tipo    | Descrição              |
|---------|------------------------|
| `T[]`   | Novo array achatado    |

## Exemplos

```typescript
flat([1, [2, [3, [4]]]], 2); // => [1, 2, 3, [4]]
flat([1, [2, 3]]); // => [1, 2, 3]
```

## Notas

* Se depth não for informado, o padrão é 1.
* Não modifica o array original.

## Referências

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat