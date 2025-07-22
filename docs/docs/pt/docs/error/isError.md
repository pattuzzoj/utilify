# isError

A função `isError` verifica se um valor é um objeto semelhante a um erro, contendo as propriedades `name` e `message`.

## Sintaxe

```typescript
isError(value: any): value is { name: string; message: string; stack?: string };
```

### Parâmetros

| Nome    | Tipo   | Descrição                             |
|---------|--------|---------------------------------------|
| `value` | `any`  | O valor a ser verificado              |

### Retorno

| Tipo      | Descrição                                                        |
|-----------|------------------------------------------------------------------|
| `boolean` | `true` se o valor for um objeto com as propriedades de erro, `false` caso contrário |

## Exemplos

```typescript
isError(new Error("Erro genérico"));
// => true

isError({ name: "CustomError", message: "Mensagem" });
// => true

isError({});
// => false
```

## Notas

* Útil para validar objetos que seguem a estrutura de erro, mesmo que não sejam instâncias de `Error`.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error