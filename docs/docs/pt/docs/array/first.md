# first

A função `first` retorna o primeiro elemento de um array ou o primeiro caractere de uma string.

## Sintaxe

```typescript
first<T>(array: T[]): T | undefined;
first(string: string): string | undefined;
```

### Parâmetros

| Nome     | Tipo                | Descrição                |
|----------|---------------------|--------------------------|
| `array`  | `T[]` \| `string`   | Array ou string de origem|

### Retorno

| Tipo                        | Descrição                                         |
|-----------------------------|--------------------------------------------------|
| `T` \| `string` \| `undefined` | Primeiro elemento ou caractere, ou undefined se vazio |

## Exemplos

```typescript
first([1, 2, 3]); // => 1
first("abc"); // => "a"
first([]); // => undefined
```

## Notas

* Retorna undefined se o array ou string estiver vazio.
* Útil para acessar rapidamente o primeiro item.

## Referências

* https://lodash.com/docs/4.17.15#head