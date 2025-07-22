# arrayToObject

A função `arrayToObject` converte um array em um objeto, usando funções para determinar as chaves e valores.

## Sintaxe

```typescript
arrayToObject<T, K extends PropertyKey>(
  array: T[],
  keyFn?: (item: T, index: number, array: T[]) => K,
  valueFn?: (item: T, index: number, array: T[]) => any
): Record<K, any>;
```

### Parâmetros

| Nome        | Tipo                                         | Descrição                                 |
|-------------|----------------------------------------------|-------------------------------------------|
| `array`     | `T[]`                                        | Array de origem                           |
| `keyFn`     | `(item: T, index: number, array: T[]) => K`  | Função para gerar as chaves (opcional)    |
| `valueFn`   | `(item: T, index: number, array: T[]) => any`| Função para gerar os valores (opcional)   |

### Retorno

| Tipo              | Descrição          |
|-------------------|-------------------|
| `Record<K, any>`  | Objeto resultante |

## Exemplos

```typescript
arrayToObject(["a", "b"], (item, i) => item, (item, i) => i); // => { a: 0, b: 1 }
arrayToObject([1, 2, 3]); // => { 0: 1, 1: 2, 2: 3 }
```

## Notas

* As funções keyFn e valueFn são opcionais.
* Útil para transformar arrays em objetos indexados.

## Referências

* https://lodash.com/docs/4.17.15#keyBy