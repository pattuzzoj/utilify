# requireEnv

A função `requireEnv` retorna o valor de uma variável de ambiente obrigatória, lançando um erro caso não esteja definida.

## Sintaxe

```typescript
requireEnv(key: string): string;
```

### Parâmetros

| Nome    | Tipo      | Descrição                                   |
| ------- | --------- | ------------------------------------------- |
| `name`  | `string`  | O nome da variável de ambiente a ser requerida |

### Retorno

| Tipo      | Descrição                           |
| --------- | ----------------------------------- |
| `string`  | O valor da variável de ambiente.    |

### Exceções

- Lança um erro se a variável de ambiente não estiver definida.

## Exemplos

```typescript
requireEnv("NODE_ENV");
// => "development" (ou outro valor definido)

requireEnv("VAR_INEXISTENTE");
// => lança Error: Expected a valid value for 'key'
```

## Notas

* Compatível com ambientes Node.js e Deno.
* Lança um erro caso a variável não esteja definida.

## Referências

* https://nodejs.org/api/process.html#processenv
* https://deno.com/manual@v1.42.1/runtime