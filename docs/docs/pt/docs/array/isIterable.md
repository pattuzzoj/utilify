# isIterable

A função `isIterable` verifica se um valor é iterável (possui o método `Symbol.iterator`).

## Sintaxe

```typescript
isIterable(value: any): value is Iterable<any>;
```

### Parâmetros

| Nome     | Tipo     | Descrição              |
|----------|----------|------------------------|
| `value`  | `any`    | Valor a ser verificado |

### Retorno

| Tipo       | Descrição                          |
|------------|------------------------------------|
| `boolean`  | Retorna true se o valor for iterável |

## Exemplos

```typescript
isIterable([1, 2, 3]); // => true
isIterable('abc'); // => true
isIterable(123); // => false
isIterable({}); // => false
```

## Notas

* Iteráveis incluem arrays, strings, Maps, Sets, etc.
* Útil para validação antes de usar loops `for...of`.

## Referências

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols