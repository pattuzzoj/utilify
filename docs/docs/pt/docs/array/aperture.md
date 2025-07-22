# aperture

A função `aperture` retorna uma lista de subconjuntos consecutivos de tamanho fixo extraídos de um array.

## Sintaxe

```typescript
aperture<T>(array: T[], size: number = 1): T[][];
```

### Parâmetros

| Nome     | Tipo      | Descrição                      |
|----------|-----------|--------------------------------|
| `array`  | `T[]`     | Array de origem                |
| `size`   | `number`  | Tamanho de cada subconjunto    |

### Retorno

| Tipo     | Descrição                      |
|----------|-------------------------------|
| `T[][]`  | Lista de subconjuntos consecutivos |

## Exemplos

```typescript
aperture([1, 2, 3, 4], 2); // => [[1,2],[2,3],[3,4]]
aperture([1, 2, 3], 1); // => [[1],[2],[3]]
```

## Notas

* Se o tamanho for maior que o comprimento do array, retorna um array vazio.
* Útil para operações de janela deslizante.

## Referências

* https://ramdajs.com/docs/#aperture